import { format } from "date-fns";

export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white dark:bg-gray-800 px-4 py-3 rounded shadow transition-colors">
      <span
        className={`flex-1 cursor-pointer ${
          task.completed
            ? "line-through text-gray-400 dark:text-gray-500"
            : "text-black dark:text-white"
        }`}
        role="button"
        tabIndex={0}
        onClick={() => onToggle(task.id)}
        onKeyDown={(e) => e.key === "Enter" && onToggle(task.id)}
      >
        <div className="font-medium">{task.text}</div>
        {task.dueDate && (
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Due: {format(new Date(task.dueDate), "dd/MM/yyyy")}
          </div>
        )}
        {task.createdAt && (
          <div className="text-gray-400 dark:text-gray-500 text-xs">
            Added: {format(new Date(task.createdAt), "dd MMM yyyy, p")}
          </div>
        )}
      </span>
      <button
        onClick={() => onRemove(task.id)}
        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 mt-2 sm:mt-0 sm:ml-4 transition"
        aria-label={`Delete ${task.text}`}
      >
        ✕
      </button>
    </li>
  );
}
