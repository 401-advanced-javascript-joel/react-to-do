import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import ToDoItem from './ToDoItem';

const ToDoList = ({ list, updateTodo, deleteTodo, loading }) => {
  let spinner = null;
  let items = [];
  for (let i = list.length - 1; i >= 0; i--) {
    items.push(
      <ToDoItem
        key={i}
        id={list[i]._id}
        text={list[i].text}
        assignee={list[i].assignee}
        difficulty={list[i].difficulty}
        complete={list[i].complete}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />,
    );
  }
  if (loading) {
    spinner = (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className='taskList'>
      <h2>Current Tasks</h2>
      {spinner}
      <ListGroup>{items}</ListGroup>
    </div>
  );
};

export default ToDoList;
