import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  req.url = req.url.replace('/api/google-proxy', ''); // パスの調整
  proxy.web(req, res, { target: 'https://www.google.com', changeOrigin: true });
}

export const config = {
  api: {
    bodyParser: false, // バイナリリクエストを許可
  },
};
