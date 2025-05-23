export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className="flex justify-between items-center bg-white px-4 py-2 rounded shadow">
      <span
        className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}
        role="button"
        tabIndex={0}
        onClick={() => onToggle(task.id)}
        onKeyDown={(e) => e.key === 'Enter' && onToggle(task.id)}
      >
        {task.text}
      </span>
      <button
        onClick={() => onRemove(task.id)}
        className="text-red-600 ml-4"
        aria-label={`Delete ${task.text}`}
      >
        ✕
      </button>
    </li>
  );
}