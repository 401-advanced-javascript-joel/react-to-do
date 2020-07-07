import React from 'react';
import { mount } from 'enzyme';
import ToDoItem from '../components/ToDoItem';

let component = null;

beforeEach(() => {
  component = mount(<ToDoItem />);
});

afterEach(() => {
  component.unmount();
});

describe('Testing ToDoForm', () => {
  test('should render form an empty form', () => {
    expect(component).toBeDefined();
  });
});
