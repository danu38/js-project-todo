export default function TaskForm({ onSubmit, input, setInput,dueDate, setDueDate }) {
  return (
    <form onSubmit={onSubmit} 
    className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 w-full">
      <input
        type="text"
        className="border rounded px-3 py-2 flex-1 w-full sm:w-auto"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="New task"
      />
      <input
    type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
         placeholder="Due date"
        aria-label="Due date"
        className="border rounded px-3 py-2 w-full sm:w-48"
  />
      <button  type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">
        Add
      </button>
    </form>
  );
}