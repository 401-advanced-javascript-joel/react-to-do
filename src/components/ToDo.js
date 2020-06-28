import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const ToDo = () => {
  const [task, setTask] = useState('');
  const [assignee, setAssignee] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [completed, setCompleted] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    let incomplete = 0;

    for (let i = 0; i < list.length; i++) {
      if (!list[i].completed) {
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

  const toggle = (index) => {
    console.log(index);
    let newList = [...list];
    if (newList[index].completed) {
      newList[index].completed = false;
    } else {
      newList[index].completed = true;
    }
    setList(newList);
  };

  const onUpdate = (key, val) => {
    switch (key) {
      case 'task':
        setTask(val);
        break;
      case 'assignee':
        setAssignee(val);
        break;
      case 'difficulty':
        setDifficulty(val);
        break;
      case 'completed':
        setCompleted(val);
        break;
      case 'list':
        setList([...list, val]);
        break;
      default:
        break;
    }
  };

  return (
    <div className='toDo'>
      <ToDoForm
        task={task}
        assignee={assignee}
        difficulty={difficulty}
        completed={completed}
        onUpdate={onUpdate}
      />
      <ToDoList list={list} toggle={toggle} />
    </div>
  );
};

export default ToDo;
