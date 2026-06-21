"use client";

import { useState } from "react";
import Link from "next/link";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-900"> 
            Todo一覧
          </h1>

          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-900"
          >
            トップへ戻る
          </Link>
        </div>

        <TodoInput onAdd={addTodo} />

        <div className="mt-6">
          <TodoList
            todos={todos}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </main>
  );
}
