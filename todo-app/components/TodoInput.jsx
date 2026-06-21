"use client";

import React, { useState } from "react";
//import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") {
      return;
    }

    onAdd(text);
    setText("");
  };

  return (
    <div className="flex gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Todoを入力"
        className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
      />

      <button
        onClick={handleAdd}
        className="rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700"
      >
        追加
      </button>
    </div>
  );
}

