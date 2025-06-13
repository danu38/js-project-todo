import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onToggle,
  onRemove,
  onCompleteAll,
  setDarkMode,
  darkMode,
}) {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        No tasks yet. Start by adding one!
      </div>
    );
  }

  const allCompleted = tasks.every((task) => task.completed);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow-md w-full max-w-2xl mx-auto transition-colors">
      {/* Dark mode toggle button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Complete All button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={onCompleteAll}
          disabled={allCompleted}
          className={`px-4 py-2 rounded text-sm font-medium transition ${
            allCompleted
              ? "bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Complete all
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
}
