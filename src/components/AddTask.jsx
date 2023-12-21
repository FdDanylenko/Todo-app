import React, { useState } from 'react';
import { addTask } from '../taskListSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

function AddTask() {
  const dispatch = useDispatch();
  const [inputContent, setInputContent] = useState('');
  const handleInputChange = (event) => {
    setInputContent(event.target.value);
  }

  const handleAddTask = () => {
    dispatch(addTask(inputContent))
    setInputContent('')

  }

  return (
    <div className='add-task-box'>
      <input
        type='text'
        className='addTask-input'
        value={inputContent}
        onChange={handleInputChange}
        placeholder='Add a new task...'
      ></input>
      <button onClick={handleAddTask} className='addTask-btn'>Add Task</button>
    </div>
  )
}

export default AddTask;