import React from 'react';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';

function TasksList() {
  const taskList = useSelector((state) => state.taskList.tasks);
  return (
    <div className='task-list'>
      {taskList.map(task => 
        <Task key={task.id} task={task}/>)}
    </div>
  )
}

export default TasksList;