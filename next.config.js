module.exports = {
  async rewrites() {
    return [
      {
        source: '/yt/:path*', // `/yt`でYouTubeプロキシにアクセス
        destination: '/api/unblock-youtube/:path*',
      },
    ];
  },
};
