const fileInput       = document.getElementById('fileInput');
const uploadArea      = document.getElementById('uploadArea');
const previewArea     = document.getElementById('previewArea');
const previewImg      = document.getElementById('previewImg');
const clearBtn        = document.getElementById('clearBtn');
const submitBtn       = document.getElementById('submitBtn');
const resultSection   = document.getElementById('resultSection');
const ocrTextEl       = document.getElementById('ocrText');
const chatHistory     = document.getElementById('chatHistory');
const chatInputArea   = document.getElementById('chatInputArea');
const studentInput    = document.getElementById('studentInput');
const replyBtn        = document.getElementById('replyBtn');
const chatLoading     = document.getElementById('chatLoading');
const loading         = document.getElementById('loading');
const errorMsg        = document.getElementById('errorMsg');

let selectedFile = null;
// 對話歷史（給後端用）
let conversationHistory = [];

// ── 點擊上傳區域 ────────────────────────────────────────────────────────
uploadArea.addEventListener('click', () => fileInput.click());

// ── 拖曳上傳 ────────────────────────────────────────────────────────────
uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('drag-over');
});
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});

// ── 選擇檔案 ────────────────────────────────────────────────────────────
fileInput.addEventListener('change', () => {
  if (fileInput.files[0]) handleFile(fileInput.files[0]);
});

// ── 處理選擇的檔案 ──────────────────────────────────────────────────────
function handleFile(file) {
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    showError('請選擇 JPG 或 PNG 格式的圖片');
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showError('圖片大小不能超過 10MB');
    return;
  }
  selectedFile = file;
  hideError();
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImg.src = e.target.result;
    previewArea.style.display = 'block';
    uploadArea.style.display = 'none';
    submitBtn.disabled = false;
  };
  reader.readAsDataURL(file);
}

// ── 移除圖片 ────────────────────────────────────────────────────────────
clearBtn.addEventListener('click', () => {
  selectedFile = null;
  previewArea.style.display = 'none';
  uploadArea.style.display = 'block';
  submitBtn.disabled = true;
  fileInput.value = '';
  resultSection.style.display = 'none';
  conversationHistory = [];
  chatHistory.innerHTML = '';
  hideError();
});

// ── 送出分析（第一次，上傳圖片）────────────────────────────────────────
submitBtn.addEventListener('click', async () => {
  if (!selectedFile) return;
  setLoading(true);
  resultSection.style.display = 'none';
  chatHistory.innerHTML = '';
  conversationHistory = [];
  hideError();

  const formData = new FormData();
  formData.append('image', selectedFile);

  try {
    const res = await fetch('/api/analyze', { method: 'POST', body: formData });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || '伺服器發生錯誤');

    // 顯示 OCR 辨識結果
    ocrTextEl.textContent = data.ocr_text || '（由 AI Vision 直接辨識）';

    // 記錄對話歷史，AI 第一句話
    conversationHistory.push({ role: 'assistant', content: data.ai_response });

    // 顯示 AI 第一則訊息
    appendMessage('ai', data.ai_response);

    resultSection.style.display = 'flex';
    chatInputArea.style.display = 'flex';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  } catch (err) {
    showError('發生錯誤：' + err.message);
  } finally {
    setLoading(false);
  }
});

// ── 學生送出回答 ─────────────────────────────────────────────────────────
replyBtn.addEventListener('click', sendStudentReply);
studentInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendStudentReply();
  }
});

async function sendStudentReply() {
  const text = studentInput.value.trim();
  if (!text) return;

  studentInput.value = '';
  appendMessage('student', text);
  conversationHistory.push({ role: 'user', content: text });

  setChatLoading(true);
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ history: conversationHistory }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || '伺服器發生錯誤');

    conversationHistory.push({ role: 'assistant', content: data.ai_response });
    appendMessage('ai', data.ai_response);

  } catch (err) {
    showError('發生錯誤：' + err.message);
  } finally {
    setChatLoading(false);
  }
}

// ── 加入對話訊息泡泡 ────────────────────────────────────────────────────
function appendMessage(role, text) {
  const bubble = document.createElement('div');
  bubble.className = role === 'ai' ? 'msg msg-ai' : 'msg msg-student';

  const label = document.createElement('div');
  label.className = 'msg-label';
  label.textContent = role === 'ai' ? '🤖 AI 老師' : '🙋 你';

  const content = document.createElement('div');
  content.className = 'msg-content';
  // 保留換行，並讓 MathJax 渲染數學公式
  content.innerHTML = text.replace(/\n/g, '<br>');

  bubble.appendChild(label);
  bubble.appendChild(content);
  chatHistory.appendChild(bubble);

  // 觸發 MathJax 重新渲染
  if (window.MathJax) {
    MathJax.typesetPromise([content]).catch(() => {});
  }

  // 捲動到最新訊息
  bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// ── 工具函式 ────────────────────────────────────────────────────────────
function setLoading(isLoading) {
  loading.style.display = isLoading ? 'block' : 'none';
  submitBtn.disabled = isLoading;
}

function setChatLoading(isLoading) {
  chatLoading.style.display = isLoading ? 'block' : 'none';
  replyBtn.disabled = isLoading;
  studentInput.disabled = isLoading;
}

function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.style.display = 'block';
}

function hideError() {
  errorMsg.style.display = 'none';
  errorMsg.textContent = '';
}
