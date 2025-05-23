import { useState } from 'react';
import useTaskStore from './data/useTaskData';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import TaskStats from './Components/TaskStats';

export default function App() {
  const { tasks, addTask, removeTask, toggleTask } = useTaskStore();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input.trim());
    setInput('');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="w-full max-w-md">
        <TaskForm onSubmit={handleSubmit} input={input} setInput={setInput} />
        <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
        <TaskStats tasks={tasks} />
      </div>
    </main>
  );
}