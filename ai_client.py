"""
AI Client with automatic API key fallback.
Order: Google Gemini -> OpenAI GPT-4o -> HuggingFace
"""
import os
import base64
import logging
import traceback
import httpx
from io import BytesIO
from dotenv import load_dotenv

load_dotenv(".env.local")

logger = logging.getLogger(__name__)

# -- API Keys -----------------------------------------------------------------
GOOGLE_API_KEYS = [k.strip() for k in os.getenv("GOOGLE_API_KEY", "").split(",") if k.strip()]
OPENAI_API_KEYS = [k.strip() for k in os.getenv("OPENAI_API_KEY", "").split(",") if k.strip()]
HF_TOKENS       = [k.strip() for k in os.getenv("HF_TOKEN", "").split(",") if k.strip()]

logger.info("Loaded keys — Google:%d  OpenAI:%d  HF:%d",
            len(GOOGLE_API_KEYS), len(OPENAI_API_KEYS), len(HF_TOKENS))

# Rotation counters
_google_idx = 0
_openai_idx = 0
_hf_idx     = 0


def _next_google_key():
    if not GOOGLE_API_KEYS:
        return None
    return GOOGLE_API_KEYS[_google_idx % len(GOOGLE_API_KEYS)]

def _rotate_google():
    global _google_idx
    _google_idx += 1

def _next_openai_key():
    if not OPENAI_API_KEYS:
        return None
    return OPENAI_API_KEYS[_openai_idx % len(OPENAI_API_KEYS)]

def _rotate_openai():
    global _openai_idx
    _openai_idx += 1

def _next_hf_token():
    if not HF_TOKENS:
        return None
    return HF_TOKENS[_hf_idx % len(HF_TOKENS)]

def _rotate_hf():
    global _hf_idx
    _hf_idx += 1


def _is_quota_error(e: Exception) -> bool:
    msg = str(e).lower()
    return any(x in msg for x in ("quota", "exhausted", "rate", "429", "resource_exhausted", "too many"))

def _is_transient_error(e: Exception) -> bool:
    msg = str(e).lower()
    return any(x in msg for x in ("503", "unavailable", "overloaded", "try again", "temporarily"))


# -- Google Gemini ------------------------------------------------------------
# Model fallback order: try each until one works
_GEMINI_MODELS = [
    "gemini-flash-latest",
    "gemini-pro-latest",
    "gemini-2.5-flash-lite",
    "gemini-2.5-pro",
]

async def _ask_gemini(question: str, image_b64: str | None) -> str:
    import asyncio
    from google import genai

    tried_keys = set()
    for attempt in range(len(GOOGLE_API_KEYS) or 1):
        key = _next_google_key()
        if not key:
            raise RuntimeError("No Google API key configured")
        if key in tried_keys:
            break
        tried_keys.add(key)

        client = genai.Client(api_key=key)

        for model in _GEMINI_MODELS:
            logger.info("[Gemini] key=...%s model=%s", key[-6:], model)
            try:
                if image_b64:
                    from PIL import Image
                    img_bytes = base64.b64decode(image_b64)
                    img = Image.open(BytesIO(img_bytes))
                    response = client.models.generate_content(
                        model=model, contents=[question, img],
                    )
                else:
                    response = client.models.generate_content(
                        model=model, contents=question,
                    )
                logger.info("[Gemini] success with %s", model)
                return response.text
            except Exception as e:
                logger.warning("[Gemini] %s error: %s", model, str(e)[:120])
                if _is_quota_error(e):
                    # quota hit on this model — try next model
                    continue
                if _is_transient_error(e):
                    # 503 — wait briefly and retry same model once
                    logger.info("[Gemini] 503, retrying %s in 3s...", model)
                    await asyncio.sleep(3)
                    try:
                        if image_b64:
                            response = client.models.generate_content(
                                model=model, contents=[question, img],
                            )
                        else:
                            response = client.models.generate_content(
                                model=model, contents=question,
                            )
                        logger.info("[Gemini] success after retry with %s", model)
                        return response.text
                    except Exception as e2:
                        logger.warning("[Gemini] retry failed: %s", str(e2)[:80])
                        continue
                if "404" in str(e):
                    # model not found — try next model
                    continue
                raise

        # all models exhausted for this key, rotate key
        _rotate_google()

    raise RuntimeError("All Google API keys and models exhausted")


# -- OpenAI GPT-4o ------------------------------------------------------------
async def _ask_openai(question: str, image_b64: str | None) -> str:
    from openai import AsyncOpenAI, RateLimitError

    tried = set()
    for attempt in range(len(OPENAI_API_KEYS) or 1):
        key = _next_openai_key()
        if not key:
            raise RuntimeError("No OpenAI API key configured")
        if key in tried:
            break
        tried.add(key)

        logger.info("[OpenAI] attempt %d, key=...%s", attempt + 1, key[-6:])
        # max_retries=0: disable SDK built-in retry so our rotation logic takes over
        client = AsyncOpenAI(api_key=key, max_retries=0)
        try:
            if image_b64:
                messages = [
                    {
                        "role": "user",
                        "content": [
                            {"type": "text", "text": question},
                            {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_b64}"}},
                        ],
                    }
                ]
                model = "gpt-4o"
            else:
                messages = [{"role": "user", "content": question}]
                model = "gpt-4o-mini"

            resp = await client.chat.completions.create(model=model, messages=messages)
            logger.info("[OpenAI] success")
            return resp.choices[0].message.content
        except RateLimitError:
            logger.warning("[OpenAI] RateLimitError, rotating key")
            _rotate_openai()
            continue
        except Exception as e:
            logger.warning("[OpenAI] error: %s", e)
            if _is_quota_error(e):
                _rotate_openai()
                continue
            raise
    raise RuntimeError("All OpenAI API keys exhausted")


# -- HuggingFace (text-only fallback) -----------------------------------------
async def _ask_hf(question: str, image_b64: str | None) -> str:
    tried = set()
    for attempt in range(len(HF_TOKENS) or 1):
        token = _next_hf_token()
        if not token:
            raise RuntimeError("No HuggingFace token configured")
        if token in tried:
            break
        tried.add(token)

        logger.info("[HuggingFace] attempt %d", attempt + 1)
        headers = {"Authorization": f"Bearer {token}"}
        try:
            async with httpx.AsyncClient(timeout=60) as client:
                if image_b64:
                    payload = {"inputs": {"image": image_b64, "question": question}}
                    url = "https://api-inference.huggingface.co/models/llava-hf/llava-1.5-7b-hf"
                else:
                    payload = {"inputs": f"Question: {question}\nAnswer:"}
                    url = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1"

                r = await client.post(url, headers=headers, json=payload)
                if r.status_code in (429, 503):
                    logger.warning("[HuggingFace] status %d, rotating", r.status_code)
                    _rotate_hf()
                    continue
                r.raise_for_status()
                data = r.json()
                if isinstance(data, list) and data:
                    return data[0].get("generated_text", str(data[0]))
                return str(data)
        except httpx.ConnectError as e:
            logger.warning("[HuggingFace] network error (skipping): %s", e)
            raise RuntimeError(f"HuggingFace network unreachable: {e}")
        except Exception as e:
            logger.warning("[HuggingFace] error: %s", e)
            if "429" in str(e):
                _rotate_hf()
                continue
            raise
    raise RuntimeError("All HuggingFace tokens exhausted")


# -- Public entry point -------------------------------------------------------
async def ask_ai(question: str, image_b64: str | None = None) -> dict:
    """
    Try providers in order: Gemini -> OpenAI -> HuggingFace.
    Returns {"answer": str, "provider": str}
    """
    providers = []
    if GOOGLE_API_KEYS:
        providers.append(("Gemini", _ask_gemini))
    if OPENAI_API_KEYS:
        providers.append(("OpenAI", _ask_openai))
    if HF_TOKENS:
        providers.append(("HuggingFace", _ask_hf))

    if not providers:
        raise RuntimeError("No AI provider configured")

    errors = []
    for name, fn in providers:
        try:
            answer = await fn(question, image_b64)
            return {"answer": answer, "provider": name}
        except Exception as e:
            logger.error("[%s] failed: %s", name, e)
            errors.append(f"{name}: {e}")
            continue

    raise RuntimeError("All AI providers failed.\n" + "\n".join(errors))
