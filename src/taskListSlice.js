import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    tasks: [{id: 1, title: "Test task 1", isCompleted: false}, {id: 2, title: "Test task 2", isCompleted: false}, {id: 3, title: "Test task 2", isCompleted: false}]
  },
  reducers:{
    addTask: (state, action) => {
      state.tasks.push({id: new Date().getTime().toString(), title: action.payload.title, isCompleted: action.payload.isCompleted});
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id != action.payload.id);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    }
  }
})

export const { addTask, deleteTask, editTask } = taskListSlice.actions
export default taskListSlice.reducer;