import React from 'react';
import { mount } from 'enzyme';
import ToDoList from '../components/ToDoList';

let component = null;

beforeEach(() => {
  component = mount(<ToDoList list={[]} />);
});

afterEach(() => {
  component.unmount();
});

describe('Testing ToDoForm', () => {
  test('should render form an empty form', () => {
    expect(component).toBeDefined();
  });
});
