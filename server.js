const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// プロキシ用エンドポイント
app.use('/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    // 外部サイトへのリクエスト
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    // レスポンスをそのまま返す
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Failed to fetch the URL');
  }
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
