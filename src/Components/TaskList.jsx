import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500">No tasks yet. Start by adding one!</div>
    );
  }

  return (
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
  );
}