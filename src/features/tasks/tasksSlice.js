import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage
const loadTasks = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error("Failed to load tasks from localStorage:", error);
    return [];
  }
};

// Save tasks to localStorage
const saveTasks = (tasks) => {
  try {
    const serializedState = JSON.stringify(tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (error) {
    console.error("Failed to save tasks to localStorage:", error);
  }
};

const initialState = loadTasks();

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
      });
      saveTasks(state); // Save tasks after adding
    },
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      saveTasks(newState); // Save tasks after deleting
      return newState;
    },
    editTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        saveTasks(state); // Save tasks after editing
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
