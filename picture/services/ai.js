/**
 * services/ai.js — 可抽換 AI 介接層
 *
 * 透過環境變數 AI_PROVIDER 切換 AI 服務：
 *   mock    — 假回應（預設，無需 API Key）
 *   groq    — Groq API（免費 tier，推薦開發用）
 *   watsonx — IBM watsonx.ai
 *   openai  — OpenAI GPT
 *
 * 對外只暴露一個函式：askAI(ocrText) => Promise<string>
 */

// ── Prompt 模板（文字版，給 groq/watsonx 使用）────────────────────────────
function buildPrompt(ocrText) {
  return `你是一位耐心的高中數學與理科家教老師。
學生剛上傳了一張作業或考卷的圖片，以下是從圖片自動辨識出的文字內容：

---
${ocrText}
---

⚠️ 注意：上述文字由 OCR 自動辨識，可能含有辨識錯誤（例如數字與字母混淆、符號錯誤等）。
請你根據數學與理科的上下文，自行判斷並修正明顯的辨識錯誤，再進行分析。

請你完成以下任務：
1. 判斷圖片中是否有題目與學生的作答（若 OCR 內容難以判讀，請說明並要求學生重新上傳更清晰的圖片）。
2. 如果能判讀作答，判斷答案是否正確。
3. 無論對錯，都以「引導式提問」的方式回應，不要直接給出答案。
   - 如果答對：給予鼓勵，並問一個延伸問題加深理解。
   - 如果答錯：不要直接說出正確答案，而是透過一個提示性問題，引導學生自己找到錯誤所在。
4. 回應請使用繁體中文，語氣親切友善，適合高中生閱讀。
5. 回應格式：
   - 第一行：【判斷結果】正確 / 需要修正 / 無法判斷
   - 接著：你的引導內容（2～4句話）`;
}

// ── Vision Prompt（給圖片直接分析用）────────────────────────────────────────
const VISION_PROMPT = `你是一位耐心的高中數學與理科家教老師。
學生上傳了一張作業或考卷的圖片，請你直接看圖分析。

請你完成以下任務：
1. 閱讀圖片中的題目與學生的作答。
2. 判斷學生的答案是否正確。
3. 以「引導式提問」的方式回應，不要直接給出正確答案。
   - 如果答對：給予鼓勵，並問一個延伸問題加深理解。
   - 如果答錯：不要直接說出正確答案，透過提示引導學生自己找到錯誤。
4. 回應請使用繁體中文，語氣親切友善，適合高中生閱讀。
5. 回應格式：
   - 第一行：【判斷結果】正確 / 需要修正 / 無法判斷
   - 接著：你的引導內容（2～4句話）`;

// ── Mock Provider ────────────────────────────────────────────────────────────
async function mockAI() {
  await new Promise(r => setTimeout(r, 800));
  return `【需要修正】\n我看到你的作答了！在你繼續之前，我想請你想想：這道題的第一步，你覺得應該先做什麼運算呢？試著把解題過程一步一步寫出來，會更容易找到問題所在喔！`;
}

// ── Bob (IBM Bob Inference API) Provider ─────────────────────────────────────
async function bobAI(ocrText) {
  const OpenAI = require('openai');
  const client = new OpenAI({
    apiKey: process.env.BOB_API_KEY,
    baseURL: process.env.BOB_INFERENCE_URL, // 例如：https://<instance>.bob.ibm.com/v1
  });

  const completion = await client.chat.completions.create({
    model: process.env.BOB_MODEL_ID || 'claude-sonnet-4-5',
    messages: [{ role: 'user', content: buildPrompt(ocrText) }],
    max_tokens: 512,
    temperature: 0.7,
  });

  return completion.choices[0]?.message?.content || '（AI 沒有回應）';
}

// ── Groq Provider（文字模式，使用 OCR 結果）─────────────────────────────────
async function groqAI(ocrText) {
  const Groq = require('groq-sdk');
  const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const completion = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: buildPrompt(ocrText) }],
    max_tokens: 512,
    temperature: 0.7,
  });

  return completion.choices[0]?.message?.content || '（AI 沒有回應）';
}

// ── watsonx Provider ─────────────────────────────────────────────────────────
async function watsonxAI(ocrText) {
  const { WatsonXAI } = require('@ibm-cloud/watsonx-ai');

  const client = WatsonXAI.newInstance({
    version: '2024-05-31',
    serviceUrl: process.env.WATSONX_URL,
  });

  const response = await client.textChat({
    modelId: process.env.WATSONX_MODEL_ID || 'ibm/granite-3-2-8b-instruct',
    projectId: process.env.WATSONX_PROJECT_ID,
    messages: [{ role: 'user', content: buildPrompt(ocrText) }],
    maxTokens: 512,
    temperature: 0.7,
  });

  return response.result?.choices?.[0]?.message?.content || '（AI 沒有回應）';
}

// ── OpenAI Provider（支援 Vision 圖片輸入）──────────────────────────────────
async function openaiAI(ocrText, base64Image, mimeType) {
  const OpenAI = require('openai');
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const messages = base64Image
    ? [{
        role: 'user',
        content: [
          { type: 'text', text: VISION_PROMPT },
          {
            type: 'image_url',
            image_url: { url: `data:${mimeType};base64,${base64Image}`, detail: 'high' },
          },
        ],
      }]
    : [{ role: 'user', content: buildPrompt(ocrText) }];

  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages,
    max_tokens: 512,
    temperature: 0.7,
  });

  return completion.choices[0]?.message?.content || '（AI 沒有回應）';
}

// ── Gemini Provider（支援 Vision 圖片輸入，有免費 tier）─────────────────────
async function geminiAI(ocrText, base64Image, mimeType) {
  const { GoogleGenerativeAI } = require('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  let result;
  if (base64Image) {
    // Vision 模式：直接分析圖片
    result = await model.generateContent([
      VISION_PROMPT,
      {
        inlineData: {
          mimeType: mimeType,
          data: base64Image,
        },
      },
    ]);
  } else {
    // 文字模式
    result = await model.generateContent(buildPrompt(ocrText));
  }

  return result.response.text() || '（AI 沒有回應）';
}

// ── 多輪對話函式 ─────────────────────────────────────────────────────────────
async function chatAI(history) {
  const provider = (process.env.AI_PROVIDER || 'mock').toLowerCase();

  // system prompt：貫穿整個對話的角色設定
  const systemMsg = `你是一位耐心的高中數學與理科家教老師，正在和學生進行引導式對話。
請持續以 Socratic Method 引導學生思考，不要直接給出答案。
回應請使用繁體中文，語氣親切友善。`;

  if (provider === 'bob') {
    const OpenAI = require('openai');
    const client = new OpenAI({
      apiKey: process.env.BOB_API_KEY,
      baseURL: process.env.BOB_INFERENCE_URL,
    });
    const messages = [
      { role: 'system', content: systemMsg },
      ...history.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content })),
    ];
    const completion = await client.chat.completions.create({
      model: process.env.BOB_MODEL_ID || 'claude-sonnet-4-5',
      messages,
      max_tokens: 512,
      temperature: 0.7,
    });
    return completion.choices[0]?.message?.content || '（AI 沒有回應）';
  }

  if (provider === 'watsonx') {
    const { WatsonXAI } = require('@ibm-cloud/watsonx-ai');
    const client = WatsonXAI.newInstance({
      version: '2024-05-31',
      serviceUrl: process.env.WATSONX_URL,
    });
    const messages = [
      { role: 'system', content: systemMsg },
      ...history.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content })),
    ];
    const response = await client.textChat({
      modelId: process.env.WATSONX_MODEL_ID || 'ibm/granite-3-2-8b-instruct',
      projectId: process.env.WATSONX_PROJECT_ID,
      messages,
      maxTokens: 512,
      temperature: 0.7,
    });
    return response.result?.choices?.[0]?.message?.content || '（AI 沒有回應）';
  }

  if (provider === 'gemini') {
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: systemMsg,
    });

    // Gemini 規定：history 第一則必須是 user，且最後一則由 sendMessage 送出
    // 做法：把 AI 第一則訊息包進 system context，從第一則 user 訊息開始建 history
    const allMsgs = history.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    // 找到第一則 user 訊息的位置
    const firstUserIdx = allMsgs.findIndex(m => m.role === 'user');
    if (firstUserIdx === -1) {
      // 沒有 user 訊息，直接用 systemInstruction 問一個開場問題
      const result = await model.generateContent('請根據系統指示開始引導學生。');
      return result.response.text();
    }

    // history = 第一則 user 到倒數第二則，最後一則用 sendMessage 送出
    const geminiHistory = allMsgs.slice(firstUserIdx, -1);
    const lastMsg = allMsgs[allMsgs.length - 1].parts[0].text;

    const chat = model.startChat({ history: geminiHistory });
    const result = await chat.sendMessage(lastMsg);
    return result.response.text();
  }

  if (provider === 'openai') {
    const OpenAI = require('openai');
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const messages = [
      { role: 'system', content: systemMsg },
      ...history.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content })),
    ];
    const completion = await client.chat.completions.create({ model: 'gpt-4o-mini', messages, max_tokens: 512 });
    return completion.choices[0]?.message?.content || '（AI 沒有回應）';
  }

  if (provider === 'groq') {
    const Groq = require('groq-sdk');
    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const messages = [
      { role: 'system', content: systemMsg },
      ...history.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content })),
    ];
    const completion = await client.chat.completions.create({ model: 'llama-3.3-70b-versatile', messages, max_tokens: 512 });
    return completion.choices[0]?.message?.content || '（AI 沒有回應）';
  }

  // mock
  await new Promise(r => setTimeout(r, 600));
  return '很好的想法！那你覺得下一步應該怎麼做呢？試著把你的推理過程寫出來看看 😊';
}

// ── 主要匯出函式 ─────────────────────────────────────────────────────────────
async function askAI(ocrText, base64Image, mimeType) {
  const provider = (process.env.AI_PROVIDER || 'mock').toLowerCase();

  switch (provider) {
    case 'bob':
      return await bobAI(ocrText);
    case 'groq':
      return await groqAI(ocrText);
    case 'watsonx':
      return await watsonxAI(ocrText);
    case 'openai':
      return await openaiAI(ocrText, base64Image, mimeType);
    case 'gemini':
      return await geminiAI(ocrText, base64Image, mimeType);
    case 'mock':
    default:
      return await mockAI();
  }
}

module.exports = { askAI, chatAI };
