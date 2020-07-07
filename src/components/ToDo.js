import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import useFetch from '../hooks/useFetch';
import Settings from './Settings';

const ToDo = () => {
  const [list, setList] = useState([]);
  const { setRequest, request, loading, error, response } = useFetch();

  useEffect(() => {
    // initial run
    setRequest({
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
    });
  }, [setRequest]);

  useEffect(() => {
    if (response) {
      let todo = null;
      let newList = null;
      switch (request.method) {
        case 'POST':
          todo = { ...response };
          setList([...list, todo]);
          break;
        case 'PUT':
          todo = { ...response };
          newList = list.map((task) => {
            if (todo._id === task._id) {
              return todo;
            }
            return task;
          });
          setList(newList);
          break;
        case 'DELETE':
          todo = { ...response };
          newList = list.filter((task) => task._id !== todo._id);
          setList(newList);
          break;
        default:
          setList(response);
          break;
      }
    }
    // eslint-disable-next-line
  }, [response]);

  useEffect(() => {
    let incomplete = 0;
    for (let i = 0; i < list.length; i++) {
      if (!list[i].complete) {
        incomplete++;
      }
    }
    if (incomplete === 0) {
      document.title = 'All Tasks Completed';
    } else if (incomplete === 1) {
      document.title = '1 Task to Complete';
    } else {
      document.title = `${incomplete} Tasks to Complete`;
    }
  }, [list]);

  const addTodo = async (todo) => {
    console.log('running add');
    const request = {
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
      method: 'POST',
      body: todo,
    };
    await setRequest(request);
  };

  const deleteTodo = async (id) => {
    console.log('running delete');
    const request = {
      url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${id}`,
      method: 'DELETE',
    };
    await setRequest(request);
  };

  const updateTodo = async (id, todo) => {
    console.log('running update');
    const request = {
      url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${id}`,
      method: 'PUT',
      body: todo,
    };
    await setRequest(request);
  };

  return (
    <Container>
      <ToDoForm submit={addTodo} />
      <Settings />
      <ToDoList
        list={list}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        loading={loading}
        error={error}
      />
    </Container>
  );
};

export default ToDo;
