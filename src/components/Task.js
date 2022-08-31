import React from 'react';
import {FaTimes} from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
  return (
      <div className={task.completed ? "task reminder" : 'task'} onDoubleClick={() => {onToggle(task.id)}}>
        <h3>ID: {task.id}</h3>
        <h3>Description: {task.task} <FaTimes onClick={(id) => (onDelete(task.id))}/></h3>
        <h3>Completion Date: {task.completionDate}</h3>
    </div>
  );
}

export default Task;
