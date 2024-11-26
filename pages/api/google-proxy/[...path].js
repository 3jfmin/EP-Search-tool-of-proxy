import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  // リクエストパスをGoogleのパスに置き換え
  const targetUrl = req.url.replace(/^\/api\/google-proxy/, '');

  // プロキシを実行
  proxy.web(req, res, {
    target: `https://www.google.com${targetUrl}`,
    changeOrigin: true,
    followRedirects: true, // リダイレクトも処理
  });

  proxy.on('error', (err) => {
    console.error('プロキシエラー:', err);
    res.status(500).send('プロキシエラーが発生しました');
  });
}

export const config = {
  api: {
    bodyParser: false, // バイナリリクエストを許可
  },
};
