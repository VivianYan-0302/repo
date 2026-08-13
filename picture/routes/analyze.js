const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const Tesseract = require('tesseract.js');
const { askAI } = require('../services/ai');

const router = express.Router();

const VISION_PROVIDERS = ['openai', 'gemini'];

// 圖片前處理：灰階 + 強化對比 + 放大 + 二值化，提升 OCR 準確率
async function preprocessImage(inputPath) {
  const outputPath = inputPath + '_processed.png';
  await sharp(inputPath)
    .resize({ width: 2400, withoutEnlargement: false })  // 放大確保解析度足夠
    .greyscale()                                          // 轉灰階
    .normalise()                                          // 自動正規化亮度範圍
    .linear(1.8, -(128 * 1.8) + 160)                     // 提高對比度
    .sharpen({ sigma: 1.5 })                              // 強化銳化
    .png({ compressionLevel: 0 })                         // 無壓縮，保留細節
    .toFile(outputPath);
  return outputPath;
}

// multer 設定：暫存至 uploads/，限制 JPG / PNG
const upload = multer({
  dest: path.join(__dirname, '../uploads/'),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('只接受 JPG 或 PNG 圖片'), false);
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

// POST /api/analyze
router.post('/analyze', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '請上傳圖片檔案（JPG 或 PNG）' });
  }

  const imagePath = req.file.path;
  const provider = (process.env.AI_PROVIDER || 'mock').toLowerCase();

  try {
    let ocrText = '';
    let base64Image = null;
    let mimeType = req.file.mimetype;

    if (VISION_PROVIDERS.includes(provider)) {
      // Vision 模式：直接把圖片送給 AI
      console.log(`[${provider}] Vision 模式，直接分析圖片...`);
      const imageBuffer = fs.readFileSync(imagePath);
      base64Image = imageBuffer.toString('base64');
      ocrText = '（由 AI Vision 直接辨識）';
    } else {
      // OCR 模式：先前處理圖片再辨識文字
      console.log(`[${provider}] OCR 模式，前處理圖片...`);
      let processedPath = null;
      try {
        processedPath = await preprocessImage(imagePath);
        console.log('圖片前處理完成，開始 OCR...');
        const { data: { text } } = await Tesseract.recognize(
          processedPath,
          'chi_tra+eng',
          {
            logger: () => {},
            tessedit_pageseg_mode: '6',      // PSM 6：假設單一文字區塊（印刷體最佳）
            tessedit_ocr_engine_mode: '1',   // OEM 1：LSTM 神經網路引擎
            preserve_interword_spaces: '1',
          }
        );
        ocrText = text.trim();
        console.log('OCR 完成：', ocrText.slice(0, 80));
      } finally {
        if (processedPath) fs.unlink(processedPath, () => {});
      }
    }

    console.log('呼叫 AI 服務...');
    const aiResponse = await askAI(ocrText, base64Image, mimeType);

    res.json({ ocr_text: ocrText, ai_response: aiResponse });

  } catch (err) {
    console.error('分析錯誤：', err);
    res.status(500).json({ error: '分析過程發生錯誤，請稍後再試', detail: err.message });
  } finally {
    fs.unlink(imagePath, () => {});
  }
});

module.exports = router;
