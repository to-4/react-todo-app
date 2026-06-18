import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>

      <p>
        このアプリは Next.js 学習用の
        Todoアプリです。
      </p>

      <h2>使用技術</h2>

      <ul>
        <li>Next.js</li>
        <li>React</li>
        <li>App Router</li>
      </ul>

      <h2>学習内容</h2>

      <ul>
        <li>useState</li>
        <li>props</li>
        <li>コンポーネント分割</li>
        <li>ページ遷移</li>
      </ul>

      <Link href="/">
        トップへ戻る
      </Link>
    </main>
  );
}
