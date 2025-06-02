import { useState } from "react";
import useTaskStore from "./data/useTaskData";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import TaskStats from "./Components/TaskStats";

export default function App() {
  const { tasks, addTask, removeTask, toggleTask, completeAllTasks } =
    useTaskStore();
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState(""); // date state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input.trim(), dueDate); // pass dueDate to addTask
    setInput("");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="w-full max-w-md">
        <TaskForm
          onSubmit={handleSubmit}
          input={input}
          setInput={setInput}
          dueDate={dueDate}
          setDueDate={setDueDate}
        />
        <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask}  onCompleteAll={completeAllTasks} />
        <TaskStats tasks={tasks} />
        <button
          onClick={completeAllTasks}
          className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Complete All
        </button>
      </div>
    </main>
  );
}
