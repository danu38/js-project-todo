export default function TaskStats({ tasks }) {
  const total = tasks.length;
  const uncompleted = tasks.filter((t) => !t.completed).length;

  return (
    <div className="mt-4 text-sm text-gray-600">
      Total: {total} | Uncompleted: {uncompleted}
    </div>
  );
}