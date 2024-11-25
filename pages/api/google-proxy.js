import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  req.url = ''; // Googleのホームページをプロキシ
  proxy.web(req, res, { target: 'https://www.google.com', changeOrigin: true });
}

export const config = {
  api: {
    bodyParser: false, // リクエストのバイナリ処理を許可
  },
};
