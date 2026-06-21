import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-slate-900">
          Todo App
        </h1>

        <p className="mt-3 text-slate-600">
          Next.js / React / App Router の学習用アプリです。
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/todos"
            className="rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-700">
            Todo一覧
          </Link>
          
          <Link
            href="/about"
            className="rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">
            About
          </Link>
        </div>
      </div>
    </main>
  );
}
