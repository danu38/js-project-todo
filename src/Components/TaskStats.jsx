export default function TaskStats({ tasks }) {
  const total = tasks.length;
  const uncompleted = tasks.filter((t) => !t.completed).length;

  return (
    <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
      <span className="block sm:inline">Total: {total}</span>
      <span className="mx-2 hidden sm:inline">|</span>
      <span className="block sm:inline">Uncompleted: {uncompleted}</span>
    </div>
  );
}