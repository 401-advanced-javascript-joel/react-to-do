import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ list, toggle }) => {
  let items = [];
  for (let i = 0; i < list.length; i++) {
    items.push(
      <ToDoItem
        key={i}
        task={list[i].task}
        assignee={list[i].assignee}
        difficulty={list[i].difficulty}
        completed={list[i].completed}
        toggle={() => toggle(i)}
      />,
    );
  }

  return (
    <div className='toDoList'>
      <h2 className='ui headers'>Current Tasks</h2>
      <div className='ui relaxed divided list'>{items}</div>
    </div>
  );
};

export default ToDoList;
