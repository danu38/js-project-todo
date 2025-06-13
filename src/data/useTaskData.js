import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTaskStore = create(
  persist(
  (set) => ({
  tasks: [],
  addTask: (text, dueDate,  category = "General") =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          text,
          dueDate,
          category,
          completed: false,
          createdAt: new Date().toISOString(),
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
}),
 {
      name: "task-storage", // key in localStorage
    }
  )
);

export default useTaskStore;
