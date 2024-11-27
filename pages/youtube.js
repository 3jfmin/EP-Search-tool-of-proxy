import { useEffect } from 'react';

export default function YouTubeProxy() {
  useEffect(() => {
    // YouTubeプロキシを通じて表示
    window.location.href = '/youtube';
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
