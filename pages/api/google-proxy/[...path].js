import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({
  target: 'https://www.google.com', // Googleをターゲットに設定
  changeOrigin: true, // Originヘッダーを変更して偽装
  secure: true, // HTTPS通信を強制
  followRedirects: true, // リダイレクトを許可
});

export default function handler(req, res) {
  // リクエストパスをGoogleのパスに変換
  const googlePath = req.url.replace(/^\/api\/google-proxy/, '');
  req.url = googlePath;

  // ヘッダーの偽装
  req.headers['user-agent'] =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
  req.headers['referer'] = 'https://www.google.com/';
  req.headers['accept-language'] = 'en-US,en;q=0.9';

  proxy.web(req, res, {}, (err) => {
    console.error('プロキシエラー:', err.message);
    res.status(500).send('プロキシでエラーが発生しました');
  });
}

export const config = {
  api: {
    bodyParser: false, // バイナリデータを許可
  },
};
