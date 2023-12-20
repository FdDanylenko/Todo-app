  import { createSlice } from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
  name: 'tasks',
  initialState: [
    {id: 1, title: "Test task 1", isCompleted: false},
    {id: 2, title: "Test task 2", isCompleted: false},
    {id: 3, title: "Test task 2", isCompleted: false}
  ],
  reducers:{
    addTask: (state, action) => {
      state.push({id: new Date().getTime().toString(), title: action.payload.title, isCompleted: action.payload.isCompleted});
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id != action.payload.id);
    },
  }
})

export const selectAllTasks = (state) => state.tasks;
export const { addTask, deleteTask } = taskListSlice.actions
export default taskListSlice.reducer;