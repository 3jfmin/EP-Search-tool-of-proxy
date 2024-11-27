import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleAgreement = () => {
    router.push('/proxy'); // プロキシページへ移動
  };

  return (
    <div className="container">
      <h1>利用規約</h1>
      <ul>
        <li>1. このサイトの主は一切のトラブルの責任を負わない。</li>
        <li>2. このサイトの複製などの行為には適切な処置を早急に下す。</li>
        <li>3. 使いこなそう！ep-sより。</li>
      </ul>
      <button onClick={handleAgreement} className="agree-button">
        利用規約に同意する
      </button>
      <style jsx>{`
        .container {
          text-align: center;
          padding: 50px;
        }
        .agree-button {
          background-color: purple;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        .agree-button:hover {
          background-color: darkviolet;
        }
      `}</style>
    </div>
  );
}
