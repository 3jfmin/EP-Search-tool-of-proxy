module.exports = {
  async rewrites() {
    return [
      {
        source: '/youtube/:path*',
        destination: '/api/youtube-proxy/:path*', // YouTubeプロキシ
      },
      {
        source: '/:path*',
        destination: '/api/google-proxy/:path*', // Googleプロキシ
      },
    ];
  },
};
