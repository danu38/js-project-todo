export default function TaskForm({ onSubmit, input, setInput }) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="border rounded px-3 py-2"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="New task"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}