# MVP 計畫：高中生 AI 解題引導平台

## 頂層概述

建立一個 MVP，讓高中生可以上傳作業或考卷圖片（JPG/PNG），平台透過 OCR 辨識圖片中的文字，再交由 IBM watsonx.ai 批改題目對錯，並以逐步引導（Socratic Method）的方式幫助學生理解錯誤，而非直接給出答案。

**技術 Stack：**
- 前端：原生 HTML / CSS / JavaScript
- 後端：Node.js + Express
- OCR：Tesseract.js（在 Node.js 後端執行）
- AI 引擎：IBM watsonx.ai（Granite 系列語言模型）；**開發階段先用 Mock 回應取代，待取得 API Key 後替換**

**範圍限制（MVP）：**
- 不需要使用者登入系統
- 不需要儲存歷史記錄到資料庫
- 僅支援 JPG / PNG 圖片格式
- 對話為單輪（每次上傳重新開始），後續可擴展為多輪
- **子任務 4 先以 Mock AI 回應實作，程式碼預留 watsonx.ai SDK 替換點**

---

## 子任務

### 子任務 1：專案骨架建立

**Intent：** 建立 Node.js 專案的目錄結構與基礎設定，讓後續子任務有一致的開發環境。

**Expected Outcomes：**
- `package.json` 初始化完成，相依套件（express、multer、tesseract.js、@ibm-cloud/watsonx-ai）列於其中
- 目錄結構建立：`public/`（前端靜態檔案）、`routes/`（API 路由）、`uploads/`（暫存上傳檔案）
- `server.js` 作為主入口，Express 基本設定完成（靜態檔案、CORS、JSON 解析）
- `.env.example` 列出需要的環境變數（watsonx API Key、Project ID、URL）

**Todo List：**
1. 在 `repo/` 目錄下初始化 `package.json`
2. 安裝套件：`express`、`multer`、`tesseract.js`、`@ibm-cloud/watsonx-ai`、`dotenv`
3. 建立目錄：`public/`、`routes/`、`uploads/`
4. 建立 `server.js` 主入口（Express 基本設定）
5. 建立 `.env.example`（列出環境變數範本）
6. 建立 `.gitignore`（忽略 `node_modules/`、`.env`、`uploads/`）

**Relevant Context：**
- 工作目錄：`repo/`
- 目前 `repo/` 只有 `README.md`，完全空白

**Status：** `[ ] pending`

---

### 子任務 2：前端 UI — 圖片上傳介面

**Intent：** 建立一個簡潔的網頁介面，讓學生可以上傳圖片並顯示 AI 引導對話結果。

**Expected Outcomes：**
- `public/index.html`：包含圖片上傳欄位（僅接受 JPG/PNG）、提交按鈕、結果顯示區域
- `public/style.css`：基本樣式，畫面簡潔易用
- `public/app.js`：呼叫後端 `/api/analyze` API，顯示 OCR 結果與 AI 回應
- 載入中狀態（按下送出後顯示 loading 提示）

**Todo List：**
1. 建立 `public/index.html`（上傳表單 + 結果顯示區）
2. 建立 `public/style.css`（基本排版與響應式設計）
3. 建立 `public/app.js`（`fetch` 呼叫 `/api/analyze`，顯示回應）
4. 加入圖片預覽功能（上傳後先在頁面顯示預覽）

**Relevant Context：**
- 後端 API 端點：`POST /api/analyze`（在子任務 3 建立）
- 回傳格式：`{ ocr_text, ai_response }`

**Status：** `[ ] pending`

---

### 子任務 3：後端 API — 圖片上傳與 OCR

**Intent：** 建立 `POST /api/analyze` 端點，接收圖片檔案，使用 Tesseract.js 辨識圖片中的文字。

**Expected Outcomes：**
- `routes/analyze.js`：處理 multipart 圖片上傳（使用 multer）
- 使用 Tesseract.js 對上傳圖片進行 OCR，取得辨識文字
- 辨識完成後刪除暫存圖片
- 將辨識出的文字傳遞給下一步（AI 批改）

**Todo List：**
1. 建立 `routes/analyze.js`
2. 設定 `multer`：暫存上傳圖片至 `uploads/`，限制只接受 `image/jpeg` 和 `image/png`
3. 整合 `tesseract.js`：對圖片執行 OCR，語言設定為繁體中文（`chi_tra`）+ 英文（`eng`）
4. OCR 完成後刪除暫存圖片
5. 將 OCR 文字帶入子任務 4 的 AI 呼叫流程

**Relevant Context：**
- multer 文件：暫存路徑 `uploads/`
- tesseract.js 語言包：`chi_tra`（繁中）+ `eng`（英）
- 圖片刪除：使用 `fs.unlink` 在 OCR 後清理

**Status：** `[ ] pending`

---

### 子任務 4：後端 API — 可抽換 AI 介接層

**Intent：** 建立一個統一的 AI 介接層（`services/ai.js`），將 AI 呼叫邏輯與路由層解耦。透過環境變數 `AI_PROVIDER` 決定實際使用哪個 AI 服務，未來切換 AI 只需修改這一個檔案，路由層完全不需要改動。

**Expected Outcomes：**
- 建立 `services/ai.js`，對外只暴露一個函式 `askAI(ocrText)`，回傳引導式回應字串
- 內部根據 `AI_PROVIDER` 環境變數切換實作：
  - `mock`：直接回傳假回應（預設，無需 API Key）
  - `watsonx`：呼叫 IBM watsonx.ai
  - `groq`：呼叫 Groq API（免費 tier，速度快）
  - `openai`：呼叫 OpenAI API
- Prompt 模板集中在 `services/ai.js` 中管理
- `routes/analyze.js` 只呼叫 `askAI(ocrText)`，不感知底層 AI 服務

**Todo List：**
1. 建立 `services/` 目錄與 `services/ai.js`
2. 實作 `mock` provider：回傳預設引導式假回應，用於本地開發測試
3. 實作 `groq` provider：使用 `groq-sdk` 套件，讀取 `GROQ_API_KEY` 環境變數
4. 實作 `watsonx` provider：使用 `@ibm-cloud/watsonx-ai` 套件，讀取 `WATSONX_API_KEY`、`WATSONX_PROJECT_ID`、`WATSONX_URL`
5. 實作 `openai` provider：使用 `openai` 套件，讀取 `OPENAI_API_KEY`（備選）
6. 設計統一的 Prompt 模板（角色：高中家教老師；引導式提問，不直接給答案）
7. 在 `routes/analyze.js` 中改為呼叫 `askAI(ocrText)`
8. 更新 `.env.example`，加入 `AI_PROVIDER`、`GROQ_API_KEY`、`WATSONX_*`、`OPENAI_API_KEY`

**Relevant Context：**
- 檔案位置：`services/ai.js`（新建）
- `AI_PROVIDER` 預設值：`mock`
- Groq 免費模型建議：`llama3-8b-8192`
- watsonx 模型建議：`ibm/granite-13b-instruct-v2`
- Prompt 設計原則：Socratic Method（引導式提問，不直接告知答案）

**Status：** `[ ] pending`

---

### 子任務 5：整合測試與 README 更新

**Intent：** 確保整個流程（上傳 → OCR → AI 回應）端對端可正常運作，並更新 README 說明如何執行專案。

**Expected Outcomes：**
- 本地端啟動 `node server.js` 後，可完整跑通上傳圖片 → OCR → AI 引導回應的流程
- `README.md` 更新：包含安裝步驟、環境變數設定說明、啟動指令

**Todo List：**
1. 手動測試完整流程：上傳圖片 → 確認 OCR 文字正確 → 確認 AI 回應有引導性
2. 確認暫存圖片有被正確刪除
3. 更新 `README.md`（安裝說明、`.env` 設定方式、`npm start` 啟動）

**Relevant Context：**
- 測試圖片可用手寫數學題目的照片
- `.env` 設定參考 `.env.example`

**Status：** `[ ] pending`
