import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({
  target: 'https://www.youtube.com', // YouTubeをターゲット
  changeOrigin: true, // オリジンヘッダーを変更
  secure: true, // HTTPSを強制
});

export default function handler(req, res) {
  const targetPath = req.url.replace(/^\/api\/youtube-proxy/, ''); // 動的パスを削除
  req.url = targetPath;

  // ヘッダーの追加
  req.headers['user-agent'] =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
  req.headers['referer'] = 'https://www.youtube.com/';
  req.headers['accept-language'] = 'en-US,en;q=0.9';

  proxy.web(req, res, {}, (err) => {
    console.error('プロキシエラー:', err.message);
    res.status(500).send('プロキシサーバでエラーが発生しました。');
  });
}

export const config = {
  api: {
    bodyParser: false, // バイナリ通信を許可
  },
};
