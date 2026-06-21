# React Todo App

Next.js(App Router) と React の学習を目的として作成した Todo アプリです。

## 概要

シンプルな Todo 管理アプリです。

React の基本機能である State 管理、Props、コンポーネント分割を学習するために作成しました。

## 画面

### Home

トップページ

### Todo List

Todo の登録・一覧表示・削除を行います。

### About

アプリ概要および使用技術を表示します。

## 使用技術

* Next.js
* React
* App Router
* Tailwind CSS
* Vitest
* React Testing Library

## 機能

* Todo追加
* Todo一覧表示
* Todo削除
* ページ遷移
* コンポーネント分割
* テストコード実装

## フォルダ構成

```text
app/
├─ layout.jsx
├─ page.jsx
├─ about/
│  └─ page.jsx
└─ todos/
   └─ page.jsx

components/
├─ TodoInput.jsx
├─ TodoList.jsx
└─ TodoItem.jsx

tests/
└─ TodoInput.test.jsx
```

## セットアップ

リポジトリを取得します。

```bash
git clone <repository-url>
```

プロジェクトへ移動します。

```bash
cd todo-app
```

依存パッケージをインストールします。

```bash
npm install
```

## 開発サーバー起動

```bash
npm run dev
```

ブラウザで以下へアクセスします。

```text
http://localhost:3000
```

## テスト実行

```bash
npm test
```

## 学習内容

このアプリでは以下の内容を学習しました。

* useState
* Props
* Event Handling
* コンポーネント設計
* App Router
* Tailwind CSS
* Vitest
* React Testing Library

## 今後の改善案

* localStorage保存
* 完了フラグ
* 編集機能
* 検索機能
* Supabase連携
* 認証機能
* Vercelデプロイ

## Author

Toshiaki Ogawa
