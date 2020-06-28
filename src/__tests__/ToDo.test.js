import React from 'react';
import { mount } from 'enzyme';
import ToDo from '../components/ToDo';

describe('Test ToDo', () => {
  test('should render form and empty list', () => {
    const todo = mount(<ToDo />);

    expect(todo.find('.toDoList').length).toBe(1);
    expect(todo.find('.toDoForm').length).toBe(1);
  });

  test('should not add empty task to list', () => {
    const todo = mount(<ToDo />);
    const btn = todo.find('form button');

    btn.simulate('click');
    expect(todo.find('.item').length).toBe(0);
  });

  test('should add a new task to list', () => {
    const todo = mount(<ToDo />);
    const task = todo
      .find('textarea[name="task"]')
      .simulate('change', { target: { value: 'Test Task' } });
    const assignee = todo
      .find('input[name="assignee"]')
      .simulate('change', { target: { value: 'Test Assignee' } });
    const difficulty = todo
      .find('input[name="difficulty"]')
      .simulate('change', { target: { value: '5' } });

    const btn = todo.find('form button');

    btn.simulate('click');
    const item = todo.find('toDoItem');
    expect(todo.find('.item').length).toBe(0);
  });
});
