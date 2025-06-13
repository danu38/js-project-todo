export default function TaskForm({ onSubmit, input, setInput,dueDate, setDueDate,category, setCategory }) {
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
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded px-3 py-2"
        aria-label="Task category"
      >
        <option value="General">General</option>
        <option value="Housework">Housework</option>
        <option value="Shopping">Shopping</option>
        <option value="Work">Work</option>
       
      </select>

      <button  type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">
        Add
      </button>
    </form>
  );
}