import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../taskListSlice';
import { useState } from 'react';

function Task(props) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const inputClass = `task-text ${isChecked ? 'completed-task' : ''}`;

  return (
    <div className='task-item'>
      <div className='task-info-box'>
        <input type='checkbox' className='completed' checked={isChecked} onChange={handleCheckboxChange}></input>
        <div className={inputClass}>{props.task.title}</div>
      </div>
      <div className='btns-box'>
        <button onClick={() => {dispatch(deleteTask(props.task))}} className='btn delete-btn'>Delete</button>
      </div>
    </div>
  )
}

export default Task