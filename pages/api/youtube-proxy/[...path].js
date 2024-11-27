import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({
  target: 'https://www.youtube.com', // YouTubeをターゲット
  changeOrigin: true, // ヘッダーを変更
  secure: true, // HTTPS通信を許可
  followRedirects: true, // リダイレクトを処理
});

export default function handler(req, res) {
  // URLをYouTube用に調整
  const youtubePath = req.url.replace(/^\/api\/youtube-proxy/, '');
  req.url = youtubePath;

  // ヘッダーを偽装
  req.headers['user-agent'] =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
  req.headers['referer'] = 'https://www.youtube.com/';
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
