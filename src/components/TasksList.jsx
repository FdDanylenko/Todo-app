import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../taskListSlice';

function TasksList() {
  const tasks = useSelector(selectAllTasks);
  return (
    <div className='task-list'>
      {tasks.map(task => 
        <Task key={task.id} task={task}/>)}
    </div>
  )
}

export default TasksList;