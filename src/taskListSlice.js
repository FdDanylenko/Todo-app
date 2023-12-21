import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
  name: 'tasks',
  initialState: [
    {id: 1, title: "Test task 1"},
    {id: 2, title: "Test task 2"},
    {id: 3, title: "Test task 3"}
  ],
  reducers:{
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare(title){
        return {
          payload: {
            id: nanoid(),
            title
          }
        }
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id != action.payload.id);
    }
  }
})

export const selectAllTasks = (state) => state.tasks;
export const { addTask, deleteTask } = taskListSlice.actions
export default taskListSlice.reducer;

