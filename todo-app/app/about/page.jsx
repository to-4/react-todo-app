import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">
            About
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            このアプリについて
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            このアプリは Next.js / React / App Router の学習用に作成した
            シンプルな Todo アプリです。
          </p>
        </div>

        <section className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">
            使用技術
          </h2>

          <ul className="mt-3 space-y-2 text-slate-700">
            <li>・Next.js</li>
            <li>・React</li>
            <li>・App Router</li>
            <li>・Tailwind CSS</li>
            <li>・Vitest</li>
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">
            学習内容
          </h2>

          <ul className="mt-3 space-y-2 text-slate-700">
            <li>・useState</li>
            <li>・props</li>
            <li>・コンポーネント分割</li>
            <li>・ページ遷移</li>
            <li>・テスト実装</li>
          </ul>
        </section>

        <div className="flex gap-4">
          <Link
            href="/"
            className="rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50"
          >
            トップへ戻る
          </Link>

          <Link
            href="/todos"
            className="rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-700"
          >
            Todo一覧へ
          </Link>
        </div>
      </div>
    </main>
  );
}
