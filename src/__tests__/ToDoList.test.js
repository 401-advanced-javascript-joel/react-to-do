import React from 'react';
import { mount } from 'enzyme';
import SettingsContext from '../contexts/SettingsContext';
import ToDoList from '../components/ToDoList';

let component = null;

beforeEach(() => {
  // needs the provider to mount correctly
  component = mount(
    <SettingsContext.Provider value={{}}>
      <ToDoList list={[]} />
    </SettingsContext.Provider>,
  );
});

afterEach(() => {
  component.unmount();
});

describe('Testing ToDoForm', () => {
  test('should render form an empty form', () => {
    expect(component).toBeDefined();
  });
});
