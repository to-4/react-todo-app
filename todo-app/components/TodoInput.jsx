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
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Todoを入力"
      />

      <button onClick={handleAdd}>
        追加
      </button>
    </div>
  );
}

