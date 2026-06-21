export default function TodoItem({
  todo,
  index,
  onDelete,
}) {
  return (
    <li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3">
      {todo}

      <button
        onClick={() => onDelete(index)}
        className="rounded-md px-3 py-1 text-sm text-red-600 hover:bg-red-50"
      >
        削除
      </button>
    </li>
  );
}
