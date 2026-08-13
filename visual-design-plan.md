# Visual Design Plan — 學習網站 UI 排版

## Top-Level Overview

為一個 AI 驅動的高中生學習平台設計前端 HTML 排版。
網站分為四個獨立頁面，整體風格定調為 **Warm × Simple × Intelligent**：
奶油白背景、柔和藍綠主色、深灰文字、少量暖黃提示色、圓角卡片、柔和陰影、大量留白。

目標用戶：**高中生（全科通用）**
頁面數量：**4 個獨立 HTML 檔案**
實作方式：純 HTML + 內嵌 CSS（無外部框架依賴），放置於 `artifacts/` 目錄

---

## Design Token 定義

### 色彩
| Token | 值 | 用途 |
|---|---|---|
| `--color-bg` | `#FAFAF7` | 頁面底色（奶油白） |
| `--color-surface` | `#FFFFFF` | 卡片、輸入框底色 |
| `--color-surface-alt` | `#F0F4F0` | 次要區塊底色（淡鼠尾草） |
| `--color-primary` | `#4A9E8E` | 主色（藍綠） |
| `--color-primary-light` | `#E6F4F1` | 主色淡化背景 |
| `--color-accent` | `#F5C842` | 提示色（暖黃） |
| `--color-ink` | `#2D2D2D` | 主要文字（深灰） |
| `--color-ink-muted` | `#6B6B6B` | 次要文字 |
| `--color-ink-subtle` | `#A0A0A0` | 輔助說明文字 |
| `--color-hairline` | `#E2E2DA` | 分隔線、邊框 |

### 字型
- 字族：`'Noto Sans TC', sans-serif`（繁體中文友善，Google Fonts 免費）
- Display：32–40px / weight 600
- Headline：24px / weight 600
- Body：16px / weight 400 / line-height 1.75
- Caption：13px / weight 400

### 圓角
- 卡片：`16px`
- 按鈕：`10px`
- 輸入框：`10px`
- 小徽章：`999px`

### 陰影
- 卡片：`0 2px 12px rgba(0,0,0,0.07)`
- 浮動元素：`0 4px 24px rgba(0,0,0,0.10)`

### 間距
- Section 間距：`80px`
- 卡片內距：`28px`
- 按鈕內距：`12px 28px`

---

## Sub-Tasks

---

### Sub-Task 1 — 建立共用設計基礎檔案

**Status:** [ ] pending

**Intent**
建立一個共用的 CSS 變數與基礎樣式，讓四個頁面能一致引用，確保設計語言統一。

**Expected Outcomes**
- `artifacts/style.css` 存在，包含所有 Design Token、reset、typography、共用元件（按鈕、卡片、導覽列、頁尾）

**Todo List**
1. 建立 `artifacts/style.css`
2. 寫入 CSS 變數（色彩、字型、圓角、陰影、間距）
3. 寫入 CSS reset 與 base typography
4. 寫入共用元件樣式：`.btn-primary`、`.btn-secondary`、`.card`、`.nav`、`.footer`、`.badge`

**Relevant Context**
- Design Token 見上方定義表
- 字型使用 Google Fonts `Noto Sans TC`

---

### Sub-Task 2 — 首頁 `index.html`

**Status:** [ ] pending

**Intent**
設計學習平台的入口頁，讓學生一眼看懂平台是做什麼的，並引導進入上傳問題流程。

**Expected Outcomes**
- `artifacts/index.html` 存在，包含完整頁面排版

**Page Structure**
```
導覽列（Logo + 右側「開始學習」按鈕）
↓
Hero 區塊
  大標題：「你的 AI 學習夥伴」
  副標題：「上傳題目，找出盲點，練習強化」
  CTA 按鈕：「馬上上傳題目」→ upload.html
↓
功能說明三欄卡片（上傳 → 分析 → 練習）
↓
頁尾
```

**Todo List**
1. 建立 `artifacts/index.html`
2. 引入 `style.css` 與 Google Fonts
3. 實作導覽列
4. 實作 Hero 區塊（含插圖佔位 SVG）
5. 實作三欄功能卡片
6. 實作頁尾

**Relevant Context**
- Hero 背景使用 `--color-bg` + 少量 `--color-primary-light` 裝飾
- 三欄卡片使用 `.card`，各搭配一個簡單 emoji icon

---

### Sub-Task 3 — 上傳頁 `upload.html`

**Status:** [ ] pending

**Intent**
提供學生上傳題目的操作介面，讓流程清楚、操作直覺，不造成壓力感。

**Expected Outcomes**
- `artifacts/upload.html` 存在，包含完整頁面排版

**Page Structure**
```
導覽列
↓
頁面標題 + 說明文字
↓
上傳區塊（拖放區域 or 點擊選檔）
  支援格式說明（JPG / PNG / PDF）
↓
科目選擇（標籤式選擇器：數學 / 國文 / 英文 / 自然 / 社會 / 其他）
↓
補充說明輸入框（可選填）
↓
送出按鈕 → analysis.html
↓
頁尾
```

**Todo List**
1. 建立 `artifacts/upload.html`
2. 實作拖放上傳區塊（純 CSS 樣式，無需 JS 功能）
3. 實作科目標籤選擇器
4. 實作補充說明輸入框
5. 實作送出按鈕

**Relevant Context**
- 拖放區塊使用虛線框 + `--color-primary-light` 背景，帶圓角
- 科目標籤使用 `.badge` 樣式，選中狀態用 `--color-primary` 填色

---

### Sub-Task 4 — 分析結果頁 `analysis.html`

**Status:** [ ] pending

**Intent**
展示 AI 分析後的結果，讓學生清楚看到「問題出在哪裡」，並引導進入練習。

**Expected Outcomes**
- `artifacts/analysis.html` 存在，包含完整頁面排版

**Page Structure**
```
導覽列
↓
頁面標題「分析結果」
↓
原始題目預覽卡片
↓
AI 分析摘要卡片（暖黃提示色邊框）
  - 知識點標籤（例如：二次函數 / 因式分解）
  - 盲點說明文字
↓
建議練習方向區塊
↓
CTA 按鈕：「開始練習類題」→ practice.html
↓
頁尾
```

**Todo List**
1. 建立 `artifacts/analysis.html`
2. 實作原始題目預覽卡片
3. 實作 AI 分析摘要卡片（左側 `--color-accent` 色條裝飾）
4. 實作知識點標籤群
5. 實作建議練習方向區塊
6. 實作 CTA 按鈕

**Relevant Context**
- 分析摘要卡片使用 `--color-accent` 左側 4px 色條，背景用 `#FFFBEA`
- 知識點標籤使用 `.badge` 搭配 `--color-primary`

---

### Sub-Task 5 — 練習頁 `practice.html`

**Status:** [ ] pending

**Intent**
提供學生針對弱點的類題練習介面，清楚呈現題目與作答空間，讓學習體驗順暢。

**Expected Outcomes**
- `artifacts/practice.html` 存在，包含完整頁面排版

**Page Structure**
```
導覽列
↓
頁面標題 + 進度指示（第 1 題 / 共 3 題）
↓
題目卡片
  - 題號
  - 題目文字
  - 選項（單選，4 個選項卡片式排列）
↓
「下一題」按鈕
↓
（最後一題後）完成摘要卡片
  - 答對 / 答錯數量
  - 鼓勵文字
  - 「回首頁」按鈕
↓
頁尾
```

**Todo List**
1. 建立 `artifacts/practice.html`
2. 實作進度指示列
3. 實作題目卡片
4. 實作選項卡片（4 個，hover 狀態用 `--color-primary-light`）
5. 實作「下一題」按鈕
6. 實作完成摘要卡片

**Relevant Context**
- 選項卡片使用 `.card` 變體，hover 時邊框變 `--color-primary`
- 進度指示使用細橫條 + 當前進度填色

---

## 頁面連結關係

```
index.html
  └─→ upload.html
        └─→ analysis.html
              └─→ practice.html
                    └─→ index.html
```

## 檔案結構

```
artifacts/
  style.css          ← Sub-Task 1
  index.html         ← Sub-Task 2
  upload.html        ← Sub-Task 3
  analysis.html      ← Sub-Task 4
  practice.html      ← Sub-Task 5
```
