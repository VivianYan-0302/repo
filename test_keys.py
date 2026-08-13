"""
快速測試所有 API key 是否可用
執行: python test_keys.py
"""
import asyncio
import os
from dotenv import load_dotenv

load_dotenv(".env.local")

GOOGLE_KEY = os.getenv("GOOGLE_API_KEY", "")
OPENAI_KEY = os.getenv("OPENAI_API_KEY", "")
HF_TOKEN   = os.getenv("HF_TOKEN", "")


def test_gemini():
    print("\n[1] 測試 Google Gemini...")
    try:
        import google.generativeai as genai
        genai.configure(api_key=GOOGLE_KEY)
        model = genai.GenerativeModel("gemini-2.5-flash")
        resp = model.generate_content("Say hello in one word")
        print(f"    OK: {resp.text.strip()}")
        return True
    except Exception as e:
        print(f"    FAIL: {e}")
        return False


async def test_openai():
    print("\n[2] 測試 OpenAI...")
    try:
        from openai import AsyncOpenAI
        client = AsyncOpenAI(api_key=OPENAI_KEY, max_retries=0)
        resp = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": "Say hello in one word"}],
            max_tokens=10,
        )
        print(f"    OK: {resp.choices[0].message.content.strip()}")
        return True
    except Exception as e:
        print(f"    FAIL: {e}")
        return False


async def test_hf():
    print("\n[3] 測試 HuggingFace...")
    try:
        import httpx
        async with httpx.AsyncClient(timeout=20) as client:
            r = await client.post(
                "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",
                headers={"Authorization": f"Bearer {HF_TOKEN}"},
                json={"inputs": "Say hello"},
            )
            print(f"    HTTP {r.status_code}: {r.text[:100]}")
            return r.status_code == 200
    except Exception as e:
        print(f"    FAIL: {e}")
        return False


async def main():
    print("=" * 50)
    print("API Key 連線測試")
    print("=" * 50)

    g = test_gemini()
    o = await test_openai()
    h = await test_hf()

    print("\n" + "=" * 50)
    print(f"Gemini:      {'OK' if g else 'FAIL'}")
    print(f"OpenAI:      {'OK' if o else 'FAIL'}")
    print(f"HuggingFace: {'OK' if h else 'FAIL'}")
    print("=" * 50)

    if not any([g, o, h]):
        print("\n所有 API 都失敗，請確認：")
        print("  1. 網路是否能連到 Google / OpenAI / HuggingFace")
        print("  2. API key 是否有效（未過期、未超額）")

asyncio.run(main())
