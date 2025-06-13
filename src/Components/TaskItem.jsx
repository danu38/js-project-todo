import { format, isBefore, startOfDay } from 'date-fns';

export default function TaskItem({ task, onToggle, onRemove }) {
 const today = startOfDay(new Date());
  const isOverdue = task.dueDate && isBefore(new Date(task.dueDate), today) && !task.completed;

    return (
    <li className="flex justify-between items-center bg-white dark:bg-gray-700 px-4 py-2 rounded shadow">
      <span
        className={`flex-1 cursor-pointer ${
          task.completed
            ? 'line-through text-gray-400'
            : isOverdue
            ? 'text-red-600 font-semibold'
            : ''
        }`}
        role="button"
        tabIndex={0}
        onClick={() => onToggle(task.id)}
        onKeyDown={(e) => e.key === 'Enter' && onToggle(task.id)}
      >
        {task.text}
        {task.dueDate && (
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">
            (Due: {format(new Date(task.dueDate), 'dd/MM/yyyy')})
          </span>
        )}
        {task.createdAt && (
          <span className="block text-xs text-gray-400 mt-1">
            Added: {format(new Date(task.createdAt), 'dd MMM yyyy, p')}
          </span>
        )}
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
