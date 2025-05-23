import { create } from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text, completed: false }],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default useTaskStore;