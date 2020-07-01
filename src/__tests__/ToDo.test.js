import React from 'react';
import { mount } from 'enzyme';
import ToDo from '../components/ToDo';

describe('Test ToDo', () => {
  test('should render form and empty list', () => {
    const todo = mount(<ToDo />);

    expect(todo.find('form').length).toBe(1);
    expect(todo.find('.taskList').length).toBe(1);
    todo.unmount();
  });

  test('should not add empty task to list', () => {
    const todo = mount(<ToDo />);
    const btn = todo.find('form button');

    btn.simulate('click');
    expect(todo.find('.list-group-item').length).toBe(0);
    todo.unmount();
  });

  test('should add a new task to list', () => {
    const todo = mount(<ToDo />);
    const text = todo
      .find('#task')
      .simulate('change', { target: { value: 'Test Task' } });
    const assignee = todo
      .find('#assignee')
      .simulate('change', { target: { value: 'Test Assignee' } });
    const difficulty = todo
      .find('#difficulty')
      .simulate('change', { target: { value: '5' } });

    const btn = todo.find('form button');

    btn.simulate('click');
    expect(todo.find('.list-group-item').length).toBe(0);
    todo.unmount();
  });
});
