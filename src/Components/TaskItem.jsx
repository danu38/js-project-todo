import { format } from 'date-fns';


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
        {task.text}{task.dueDate && (
          <span className="text-gray-500 text-sm ml-2">
            {format(new Date(task.dueDate), 'dd/MM/yyyy')}
          </span>
        )}
{task.createdAt && (
  <span className="block text-gray-400 text-xs mt-1">
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