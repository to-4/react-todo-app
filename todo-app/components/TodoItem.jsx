export default function TodoItem({
  todo,
  index,
  onDelete,
}) {
  return (
    <li>
      {todo}

      <button
        onClick={() => onDelete(index)}
      >
        削除
      </button>
    </li>
  );
}
