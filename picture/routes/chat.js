const express = require('express');
const { chatAI } = require('../services/ai');

const router = express.Router();

// POST /api/chat — 多輪對話（學生回答後繼續引導）
router.post('/chat', async (req, res) => {
  const { history } = req.body;

  if (!history || !Array.isArray(history) || history.length === 0) {
    return res.status(400).json({ error: '請提供對話歷史' });
  }

  try {
    const aiResponse = await chatAI(history);
    res.json({ ai_response: aiResponse });
  } catch (err) {
    console.error('對話錯誤：', err);
    res.status(500).json({ error: '對話發生錯誤，請稍後再試', detail: err.message });
  }
});

module.exports = router;
