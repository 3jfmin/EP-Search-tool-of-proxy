import { useEffect } from 'react';

export default function YouTubeProxy() {
  useEffect(() => {
    // YouTubeプロキシ経由でロード
    window.location.href = '/yt';
  }, []);

  return (
    <div className="loading-container">
      <p>接続中...</p>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 18px;
          color: #555;
        }
      `}</style>
    </div>
  );
}
