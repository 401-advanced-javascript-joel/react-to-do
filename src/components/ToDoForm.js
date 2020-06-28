import React from 'react';

const ToDoForm = ({ task, assignee, difficulty, completed, onUpdate }) => {
  const handleCheckbox = (e) => {
    const target = e.target.previousSibling;
    const checked = target.checked;
    if (checked) {
      target.checked = false;
    } else {
      target.checked = true;
    }
    onUpdate('completed', target.checked);
  };

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    onUpdate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && assignee && difficulty) {
      onUpdate('list', { task, assignee, difficulty, completed });
    }
  };

  return (
    <form className='ui form toDoForm' onSubmit={handleSubmit}>
      <div className='field'>
        <label>Task</label>
        <textarea
          name='task'
          rows='2'
          placeholder='Pick up some milk from the store...'
          value={task}
          onChange={handleChanges}
        />
      </div>
      <div className='field'>
        <label>Assignee</label>
        <input
          type='text'
          name='assignee'
          placeholder='Sarah Smalls...'
          value={assignee}
          onChange={handleChanges}
        />
      </div>
      <div className='field'>
        <label>Difficulty</label>
        <input
          type='number'
          name='difficulty'
          min='1'
          max='5'
          placeholder='1-5'
          value={difficulty}
          onChange={handleChanges}
        />
      </div>
      <div className='ui segment'>
        <div className='field'>
          <div className='ui toggle checkbox'>
            <input
              type='checkbox'
              name='completed'
              className='hidden'
              checked={completed}
              onChange={handleCheckbox}
            />
            <label onClick={handleCheckbox}>Completed</label>
          </div>
        </div>
      </div>
      <button className='ui button' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default ToDoForm;
