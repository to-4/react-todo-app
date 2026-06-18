import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onDelete,
}) {
  return (
    <ul>
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
