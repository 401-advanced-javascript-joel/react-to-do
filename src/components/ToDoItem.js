import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { IconContext } from 'react-icons';
import { RiCheckboxIndeterminateLine, RiCheckboxLine } from 'react-icons/ri';

const ToDoItem = ({
  id,
  text,
  assignee,
  difficulty,
  complete,
  updateTodo,
  deleteTodo,
}) => {
  const icon = complete ? <RiCheckboxLine /> : <RiCheckboxIndeterminateLine />;
  const textMarkup = complete ? <del>{text}</del> : text;
  const toggleComplete = !complete;

  return (
    <ListGroup.Item className='taskItem'>
      <div className='taskIcon'>
        <IconContext.Provider value={{ size: '2em' }}>
          {icon}
        </IconContext.Provider>
      </div>
      <div>
        <span className='header'>
          <strong>Assignee:</strong> {assignee} <strong>Difficulty:</strong>{' '}
          {difficulty}
          <div className='description'>{textMarkup}</div>
        </span>
      </div>
      <div className='taskTools'>
        <Button
          variant='primary'
          type='button'
          onClick={() =>
            updateTodo(id, {
              id,
              text,
              assignee,
              difficulty,
              complete: toggleComplete,
            })
          }
        >
          Toggle
        </Button>
        <Button variant='danger' type='button' onClick={() => deleteTodo(id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ToDoItem;
