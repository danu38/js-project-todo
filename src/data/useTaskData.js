import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (text, dueDate) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          text,
          dueDate,
          completed: false,
          createdAt: new Date().toISOString()
        },
      ],
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
    completeAllTasks: () =>
  set((state) => ({
    tasks: state.tasks.map((task) => ({ ...task, completed: true })),
  })),
}));

export default useTaskStore;
