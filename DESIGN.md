# DESIGN.md — 學習網站視覺設計規範

> 本文件定義學習平台的完整視覺設計語言。
> 所有頁面開發（包含其他分支的 HTML 產出）皆應遵循此規範，以確保整體設計一致性。

---

## 設計理念

**Warm × Simple × Intelligent**

目標用戶為**高中生（全科通用）**，整體感覺應像一個讓學生感到安心的學習夥伴。

- ✅ 奶油白背景、柔和配色、大量留白
- ✅ 清楚的資訊階層、友善的互動元件
- ❌ 不使用傳統補習班風格（大量紅色、強烈對比）
- ❌ 不使用過度科技化的深色背景、霓虹色、發光 AI 元素

---

## 色彩系統

```css
:root {
  --color-bg:           #FAFAF7; /* 頁面底色（奶油白）*/
  --color-surface:      #FFFFFF; /* 卡片、輸入框底色 */
  --color-surface-alt:  #F0F4F0; /* 次要區塊底色（淡鼠尾草）*/
  --color-primary:      #4A9E8E; /* 主色（藍綠）*/
  --color-primary-light:#E6F4F1; /* 主色淡化背景 */
  --color-accent:       #F5C842; /* 提示色（暖黃）*/
  --color-ink:          #2D2D2D; /* 主要文字（深灰）*/
  --color-ink-muted:    #6B6B6B; /* 次要文字 */
  --color-ink-subtle:   #A0A0A0; /* 輔助說明文字 */
  --color-hairline:     #E2E2DA; /* 分隔線、邊框 */
}
```

### 色彩使用原則

| 色彩 | 用途 |
|------|------|
| `--color-primary` | 主要按鈕、連結、選中狀態、重點標記 |
| `--color-accent` | 警示、提示、AI 分析重點標示（暖黃色條） |
| `--color-bg` | 所有頁面背景 |
| `--color-surface` | 卡片、輸入框、浮層 |
| `--color-surface-alt` | 交替區塊背景、hover 狀態 |
| `--color-ink` | 標題、正文 |
| `--color-ink-muted` | 副標題、說明文字 |
| `--color-ink-subtle` | 佔位文字、輔助標籤 |

---

## 字型系統

```html
<!-- 在所有 HTML 頁面的 <head> 引入 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Noto Sans TC', sans-serif;
}
```

### 字型層級

| 層級 | 大小 | 字重 | 行高 | 用途 |
|------|------|------|------|------|
| Display | 36–40px | 600 | 1.3 | 頁面主標題、Hero 大標 |
| Headline | 24px | 600 | 1.4 | 區塊標題、卡片標題 |
| Subhead | 18px | 500 | 1.5 | 副標題、重要說明 |
| Body | 16px | 400 | 1.75 | 正文、描述文字 |
| Caption | 13px | 400 | 1.5 | 輔助說明、標籤、meta 資訊 |

---

## 間距系統

基礎單位：**4px**

| Token | 值 | 用途 |
|------|------|------|
| `--space-xs` | 8px | 元素內微間距 |
| `--space-sm` | 12px | 小元件間距 |
| `--space-md` | 16px | 標準間距 |
| `--space-lg` | 24px | 卡片內距、區塊間距 |
| `--space-xl` | 32px | 大區塊間距 |
| `--space-xxl` | 48px | Section 間距 |
| `--space-section` | 80px | 頁面主要區塊間距 |

---

## 圓角系統

| 用途 | 值 |
|------|------|
| 卡片 | `16px` |
| 按鈕 | `10px` |
| 輸入框 | `10px` |
| 小徽章 / 標籤 | `999px` |
| 上傳區域 | `16px` |

---

## 陰影系統

```css
/* 卡片（預設）*/
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);

/* 浮動元素、hover 狀態 */
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
```

不使用高對比度陰影，避免視覺壓迫感。

---

## 共用元件規範

### 按鈕

```css
/* 主要按鈕 */
.btn-primary {
  background-color: var(--color-primary);
  color: #ffffff;
  border-radius: 10px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 500;
  border: none;
}

/* 次要按鈕 */
.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
  border-radius: 10px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 500;
}
```

### 卡片

```css
.card {
  background-color: var(--color-surface);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
}
```

### 標籤／徽章

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  background-color: var(--color-primary-light);
  color: var(--color-primary);
}
```

### AI 分析提示卡片

```css
.card-accent {
  background-color: #FFFBEA;
  border-left: 4px solid var(--color-accent);
  border-radius: 16px;
  padding: 28px;
}
```

### 導覽列

```css
.nav {
  background-color: var(--color-surface);
  height: 64px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
```

### 頁尾

```css
.footer {
  background-color: var(--color-surface-alt);
  color: var(--color-ink-muted);
  font-size: 13px;
  padding: 40px 32px;
}
```

---

## 頁面結構

### 四個頁面

| 檔案 | 頁面名稱 | 功能 |
|------|------|------|
| `artifacts/index.html` | 首頁 | 平台介紹，引導進入上傳流程 |
| `artifacts/upload.html` | 上傳頁 | 上傳題目圖片，選擇科目 |
| `artifacts/analysis.html` | 分析結果頁 | 顯示 AI 分析的知識點與盲點 |
| `artifacts/practice.html` | 練習頁 | 針對弱點的類題練習 |

### 頁面連結流程

```
index.html → upload.html → analysis.html → practice.html → index.html
```

### 各頁面共用結構

```
導覽列（nav）
  主內容區（main）
頁尾（footer）
```

---

## Do's and Don'ts

### ✅ Do

- 使用 `--color-primary` 作為唯一主色，用於按鈕、連結、選中狀態
- 卡片統一使用 `border-radius: 16px` + 柔和陰影
- 大量留白，section 間距至少 `80px`
- 繁體中文介面文字使用 Noto Sans TC
- 使用 `--color-accent` 暖黃色僅用於提示、警示、AI 分析重點

### ❌ Don't

- 不使用深色背景頁面（Dark Mode 不在本版本範圍）
- 不使用紅色、橘色作為主色
- 不使用超過 3 種主要顏色在同一個區塊
- 不使用高對比陰影或發光效果
- 不使用全大寫文字或過度強調的樣式

---

## 檔案結構

```
artifacts/
  style.css          ← 共用 CSS（Design Token + 元件樣式）
  index.html         ← 首頁
  upload.html        ← 上傳頁
  analysis.html      ← 分析結果頁
  practice.html      ← 練習頁
```

---

*本文件由 VisualDesign 分支維護。如需修改設計規範，請在此分支更新後 merge 至主分支。*
