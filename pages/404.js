import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // ホームにリダイレクト
    router.push('/');
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - ページが見つかりません</h1>
      <p>数秒後にホームに戻ります...</p>
    </div>
  );
}
