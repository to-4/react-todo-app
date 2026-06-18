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
    <main>
      <h1>Todo一覧</h1>

      <TodoInput onAdd={addTodo} />

      <TodoList
        todos={todos}
        onDelete={deleteTodo}
      />

      <Link href="/">
        トップへ戻る
      </Link>
    </main>
  );
}
