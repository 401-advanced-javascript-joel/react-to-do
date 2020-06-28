import React from 'react';

const ToDoItem = ({ task, assignee, difficulty, completed, toggle }) => {
  const classes = completed ? 'check circle icon' : 'check circle outline icon';
  return (
    <div className='item toDoItem' onClick={toggle}>
      <i className={classes}></i>
      <div className='content'>
        <span className='header'>
          For: {assignee} Difficulty {difficulty}
        </span>
        <div className='description'>{task}</div>
      </div>
    </div>
  );
};

export default ToDoItem;
