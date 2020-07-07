import React, { useState, useEffect, useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import ToDoItem from './ToDoItem';
import SettingsContext from '../contexts/SettingsContext';

const ToDoList = ({ list, updateTodo, deleteTodo, loading }) => {
  const data = useContext(SettingsContext);

  const [page, setPage] = useState(0);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    const currentList = [];
    let i = page * data.taskCount;
    let max = i + data.taskCount;

    let modifiedList = data.showComplete
      ? list
      : list.filter((item) => !item.complete);

    for (i; i < max; i++) {
      if (i >= modifiedList.length) break;
      currentList.push(
        <ToDoItem
          key={i}
          id={modifiedList[i]._id}
          text={modifiedList[i].text}
          assignee={modifiedList[i].assignee}
          difficulty={modifiedList[i].difficulty}
          complete={modifiedList[i].complete}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />,
      );
    }
    setDisplayList(currentList);
  }, [list, page, data.taskCount, data.showComplete, updateTodo, deleteTodo]);

  // set to null and only set jsx if loading
  let spinner = null;
  if (loading) {
    spinner = (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  }

  // set to null and only set jsx if more than current task count exist
  let buttons = null;
  if (list.length > data.taskCount) {
    buttons = (
      <>
        <Button variant='outline-secondary' onClick={() => setPage(page - 1)}>
          Previous
        </Button>{' '}
        <Button variant='outline-secondary' onClick={() => setPage(page + 1)}>
          Next
        </Button>{' '}
      </>
    );
  }

  return (
    <div className='taskList'>
      <h2>Current Tasks</h2>
      {spinner}
      <ListGroup>{displayList}</ListGroup>
      <div className='list-nav'>{buttons}</div>
    </div>
  );
};

export default ToDoList;
