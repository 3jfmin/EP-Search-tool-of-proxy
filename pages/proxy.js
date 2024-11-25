import { useEffect } from 'react';

export default function Proxy() {
  useEffect(() => {
    // Googleへリダイレクト
    window.location.href = '/api/google-proxy';
  }, []);

  return (
    <div className="loading-container">
      <p>プロキシを準備中...</p>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
