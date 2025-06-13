import { useState, useEffect } from "react";
import useTaskStore from "./data/useTaskData";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import TaskStats from "./Components/TaskStats";

export default function App() {
  const { tasks, addTask, removeTask, toggleTask, completeAllTasks } =
    useTaskStore();
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState(""); // date state
  const [darkMode, setDarkMode] = useState(false);

  // Filter state
  const [filterStatus, setFilterStatus] = useState("all"); // all, completed, uncompleted
  const [filterDate, setFilterDate] = useState(""); // yyyy-MM-dd

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Apply filters to tasks here
  const filteredTasks = tasks.filter((task) => {
    // Filter by status
    if (filterStatus === "completed" && !task.completed) return false;
    if (filterStatus === "uncompleted" && task.completed) return false;

    // Filter by creation date if date filter set
    if (filterDate) {
      const filterDateObj = new Date(filterDate);
      const taskCreatedDate = new Date(task.createdAt);
      if (taskCreatedDate < filterDateObj) return false;
    }

    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input.trim(), dueDate); // pass dueDate to addTask
    setInput("");
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col items-center transition-colors">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 dark:bg-gray-700 text-sm sm:text-base rounded"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
          Task Manager
        </h1>
        <TaskForm
          onSubmit={handleSubmit}
          input={input}
          setInput={setInput}
          dueDate={dueDate}
          setDueDate={setDueDate}
        />

{/* Filter controls */}
        <div className="flex gap-4 mb-4 items-center justify-between">
          {/* Status filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border rounded px-3 py-1 dark:bg-gray-700 dark:text-white"
            aria-label="Filter tasks by status"
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>

          {/* Created after date filter */}
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border rounded px-3 py-1 dark:bg-gray-700 dark:text-white"
            aria-label="Show tasks created after date"
          />

          {/* Clear filters button */}
          <button
            onClick={() => {
              setFilterStatus("all");
              setFilterDate("");
            }}
            className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded text-sm"
          >
            Clear Filters
          </button>
        </div>


        <TaskList
         tasks={filteredTasks}
          onToggle={toggleTask}
          onRemove={removeTask}
          onCompleteAll={completeAllTasks}
           darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <TaskStats tasks={filteredTasks} />
        <button
          onClick={completeAllTasks}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto"
        >
          Complete All
        </button>
      </div>
    </main>
  );
}
