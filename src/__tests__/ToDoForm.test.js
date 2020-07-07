import React from 'react';
import { mount } from 'enzyme';
import ToDoForm from '../components/ToDoForm';

describe('Testing ToDoForm', () => {
  let component = null;
  beforeEach(() => {
    component = mount(<ToDoForm />);
  });

  afterEach(() => {
    component.unmount();
  });
  test('should render form an empty form', () => {
    expect(component).toBeDefined();
  });
});
