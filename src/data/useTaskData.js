import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      projects: [],

      // Add a new task with optional category and projectId
      addTask: (text, dueDate, category = "General", projectId = null) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              text,
              dueDate,
              category,
              projectId,
              completed: false,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      // Remove task
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      // Toggle task complete
      toggleTask: (id) =>
        set((state) => {
          const updatedTasks = state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          );

          // Optionally mark project as complete if all its tasks are complete
          const affectedTask = state.tasks.find((t) => t.id === id);
          const projectId = affectedTask?.projectId;
          let updatedProjects = state.projects;

          if (projectId) {
            const tasksInProject = updatedTasks.filter(
              (t) => t.projectId === projectId
            );
            const allDone = tasksInProject.every((t) => t.completed);

            updatedProjects = state.projects.map((p) =>
              p.id === projectId ? { ...p, completed: allDone } : p
            );
          }

          return {
            tasks: updatedTasks,
            projects: updatedProjects,
          };
        }),

      // Complete all tasks
      completeAllTasks: () =>
        set((state) => {
          const updatedTasks = state.tasks.map((task) => ({
            ...task,
            completed: true,
          }));

          // Update project completion status
          const updatedProjects = state.projects.map((project) => {
            const projectTasks = updatedTasks.filter(
              (task) => task.projectId === project.id
            );
            const allCompleted = projectTasks.every((t) => t.completed);
            return { ...project, completed: allCompleted };
          });

          return {
            tasks: updatedTasks,
            projects: updatedProjects,
          };
        }),

      // Add a new project
      addProject: (name) =>
        set((state) => ({
          projects: [
            ...state.projects,
            { id: Date.now(), name, completed: false },
          ],
        })),
    }),
    {
      name: "task-storage", // persisted key in localStorage
    }
  )
);

export default useTaskStore;
