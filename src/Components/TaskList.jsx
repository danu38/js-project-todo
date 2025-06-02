import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onRemove, onCompleteAll }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500">No tasks yet. Start by adding one!</div>
    );
  }

  const allCompleted  = tasks.every(task => task.completed);
  

  return (
    <div>
<div className="flex justify-end mb-2">
  <button
    onClick={onCompleteAll}
    disabled={allCompleted}
    className={`px-4 py-2 rounded text-sm font-medium transition ${
            allCompleted
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          compplete all
          </button>
          </div>

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