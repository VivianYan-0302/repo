require('dotenv').config();
const express = require('express');
const path = require('path');
const analyzeRouter = require('./routes/analyze');
const chatRouter = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 3000;

// 靜態檔案（前端）
app.use(express.static(path.join(__dirname, 'public')));

// JSON 解析
app.use(express.json());

// API 路由
app.use('/api', analyzeRouter);
app.use('/api', chatRouter);

app.listen(PORT, () => {
  console.log(`伺服器啟動於 http://localhost:${PORT}`);
  console.log(`AI Provider: ${process.env.AI_PROVIDER || 'mock'}`);
});
