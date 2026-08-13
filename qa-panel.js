/**
 * qa-panel.js
 * 在所有頁面注入「智慧問答」側邊面板。
 * 點擊後：右側 1/3 顯示 AI 問答 iframe，主內容縮到左側 2/3。
 */
(function () {
  const QA_URL = 'https://repo-1-jh0q.onrender.com/';

  // ── 1. 注入 HTML ───────────────────────────────────────────
  const panelHTML = `
    <div id="qa-panel" class="qa-panel" role="complementary" aria-label="智慧問答" aria-hidden="true">
      <div class="qa-panel-header">
        <span>🤖 智慧問答</span>
        <button id="qa-close-btn" class="qa-close-btn" title="關閉" aria-label="關閉智慧問答">✕</button>
      </div>
      <iframe
        id="qa-iframe"
        src=""
        title="智慧問答"
        allow="clipboard-write"
        loading="lazy"
      ></iframe>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', panelHTML);

  // ── 2. 注入 CSS ────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .qa-panel {
      position: fixed;
      top: 0; right: 0;
      width: 33.333%;
      height: 100vh;
      background: #fff;
      box-shadow: -4px 0 24px rgba(0,0,0,0.12);
      display: flex;
      flex-direction: column;
      z-index: 500;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(.4,0,.2,1);
    }
    .qa-panel.open {
      transform: translateX(0);
    }
    .qa-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      height: 56px;
      background: #4A9E8E;
      color: #fff;
      font-weight: 600;
      font-size: 1rem;
      flex-shrink: 0;
    }
    .qa-close-btn {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.1rem;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 6px;
      transition: background 0.15s;
      line-height: 1;
    }
    .qa-close-btn:hover { background: rgba(255,255,255,0.2); }
    #qa-iframe {
      flex: 1;
      width: 100%;
      border: none;
    }

    /* 主內容區在面板開啟時縮到左側 2/3 */
    body.qa-open {
      overflow-x: hidden;
    }
    body.qa-open .navbar,
    body.qa-open main,
    body.qa-open .page-header,
    body.qa-open .container,
    body.qa-open .writing-layout,
    body.qa-open section,
    body.qa-open > div:not(.qa-panel) {
      margin-right: 33.333%;
      transition: margin-right 0.3s cubic-bezier(.4,0,.2,1);
    }
    body:not(.qa-open) .navbar,
    body:not(.qa-open) main,
    body:not(.qa-open) .page-header,
    body:not(.qa-open) .container,
    body:not(.qa-open) .writing-layout,
    body:not(.qa-open) section,
    body:not(.qa-open) > div:not(.qa-panel) {
      margin-right: 0;
      transition: margin-right 0.3s cubic-bezier(.4,0,.2,1);
    }

    /* Navbar 內的智慧問答按鈕樣式 */
    .nav-qa-btn {
      background: #4A9E8E !important;
      color: #fff !important;
      border-radius: 8px !important;
      padding: 5px 12px !important;
      font-size: 0.9rem !important;
      border-bottom: none !important;
      transition: background 0.15s !important;
      cursor: pointer;
    }
    .nav-qa-btn:hover {
      background: #3A8070 !important;
      color: #fff !important;
      border-bottom: none !important;
    }

    @media (max-width: 768px) {
      .qa-panel { width: 100%; }
      body.qa-open .navbar,
      body.qa-open main,
      body.qa-open .page-header,
      body.qa-open .container,
      body.qa-open section,
      body.qa-open > div:not(.qa-panel) {
        margin-right: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ── 3. 在 navbar 加入或替換智慧問答連結 ──────────────────
  function injectNavButton() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    // 找已存在的智慧問答連結
    const existing = Array.from(navLinks.querySelectorAll('a')).find(
      a => a.textContent.trim().includes('智慧問答')
    );

    if (existing) {
      existing.href = '#';
      existing.className = 'nav-qa-btn';
      existing.addEventListener('click', function (e) {
        e.preventDefault();
        openPanel();
      });
    } else {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#" class="nav-qa-btn">🤖 智慧問答</a>`;
      li.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        openPanel();
      });
      navLinks.appendChild(li);
    }
  }

  // ── 4. 開關邏輯 ──────────────────────────────────────────
  function openPanel() {
    // 延遲載入 iframe（避免頁面一開始就請求）
    const iframe = document.getElementById('qa-iframe');
    if (!iframe.src || iframe.src === window.location.href) {
      iframe.src = QA_URL;
    }
    document.getElementById('qa-panel').classList.add('open');
    document.getElementById('qa-panel').setAttribute('aria-hidden', 'false');
    document.body.classList.add('qa-open');
  }

  function closePanel() {
    document.getElementById('qa-panel').classList.remove('open');
    document.getElementById('qa-panel').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('qa-open');
  }

  document.getElementById('qa-close-btn').addEventListener('click', closePanel);

  // ESC 關閉
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePanel();
  });

  // ── 5. DOM ready ─────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavButton);
  } else {
    injectNavButton();
  }
})();
