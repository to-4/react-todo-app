import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>トップページ</h1>

      <p>Todoアプリのトップページです。</p>

      <ul>
        <li>
          <Link href="/todos">
            Todo一覧
          </Link>
        </li>

        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </main>
  );
}
