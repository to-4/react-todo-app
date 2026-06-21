import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onDelete,
}) {

  if (todos.length === 0) {
    return (
      <p className="rounded-lg bg-slate-50 p-4 text-slate-500">
        Todo はまだありません
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
