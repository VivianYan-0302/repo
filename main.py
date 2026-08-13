"""
FastAPI backend for AI Q&A app.
Endpoints:
  POST /ask  — { question: str, image_b64?: str } → { answer: str, provider: str }
  GET  /     — serves index.html
"""
import logging
import traceback
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os

from ai_client import ask_ai

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="AI Q&A")


class AskRequest(BaseModel):
    question: str
    image_b64: str | None = None


@app.post("/ask")
async def ask(req: AskRequest):
    if not req.question.strip() and not req.image_b64:
        raise HTTPException(status_code=400, detail="question 或 image 至少提供一項")
    try:
        result = await ask_ai(req.question or "請描述這張圖片的內容", req.image_b64)
        return result
    except Exception as e:
        logger.error("ask_ai failed: %s\n%s", e, traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
async def index():
    return FileResponse("index.html")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
