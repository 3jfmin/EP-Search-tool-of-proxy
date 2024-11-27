import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  // APIリクエストをYouTubeにリダイレクト
  proxy.web(req, res, {
    target: 'https://www.youtube.com',
    changeOrigin: true,
    secure: false,
  });

  // エラー処理
  proxy.on('error', (err) => {
    res.status(500).send('プロキシエラーが発生しました。');
  });
}

export const config = {
  api: {
    bodyParser: false, // バイナリデータを許可
  },
};
