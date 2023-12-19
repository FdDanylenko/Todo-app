import React, { useState } from 'react';
import { addTask, deleteTask, editTask } from '../taskListSlice';
import { useSelector, useDispatch } from 'react-redux';

function AddTask() {
  const taskList = useSelector((state) => state.taskList.tasks);
  const dispatch = useDispatch();
  const [inputContent, setInputContent] = useState({id: 1, title: '', isCompleted: false});
  const handleInputChange = (event) => {
    setInputContent({id: 1, title: event.target.value, isCompleted: false});
  }

  const handleAddTask = () => {
    dispatch(addTask(inputContent));
    setInputContent({ id: 1, title: '', isCompleted: false });
  }

  return (
    <div className='add-task-box'>
      <input
        type='text'
        className='addTask-input'
        value={inputContent.title}
        onChange={handleInputChange}
        placeholder='Add a new task...'
      ></input>
      <button onClick={handleAddTask} className='addTask-btn'>Add Task</button>
    </div>
  )
}

export default AddTask;