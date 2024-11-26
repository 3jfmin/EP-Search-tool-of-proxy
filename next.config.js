module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/api/google-proxy/:path*', // 全てのリクエストをプロキシへ
      },
    ];
  },
};
