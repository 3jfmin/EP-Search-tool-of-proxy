import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({
  target: 'https://www.youtube.com',
  changeOrigin: true,
  secure: true,
});

export default function handler(req, res) {
  // URLの調整
  const path = req.url.replace(/^\/api\/unblock-youtube/, '');
  req.url = path;

  // ヘッダーを偽装
  req.headers['user-agent'] =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
  req.headers['referer'] = 'https://www.youtube.com/';
  req.headers['accept-language'] = 'en-US,en;q=0.9';

  // エラー処理付きのプロキシ
  proxy.web(req, res, {}, (err) => {
    console.error('プロキシエラー:', err.message);
    res.status(500).send('プロキシエラーが発生しました');
  });
}

export const config = {
  api: {
    bodyParser: false, // バイナリデータを許可
  },
};
