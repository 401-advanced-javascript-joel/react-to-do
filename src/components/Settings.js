import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import SettingsContext from '../contexts/SettingsContext';

const Settings = (props) => {
  const data = useContext(SettingsContext);

  return (
    <Form>
      <Form.Group controlId='taskCount'>
        <Form.Label>Tasks Per Page</Form.Label>
        <Form.Control
          type='number'
          value={data.taskCount}
          onChange={(e) => data.setTaskCount(parseInt(e.target.value))}
        />
      </Form.Group>
      <Form.Group controlId='showComplete'>
        <Form.Check
          type='switch'
          checked={data.showComplete}
          label='Show Completed Tasks'
          onChange={(e) => data.setShowComplete(e.target.checked)}
        />
      </Form.Group>
    </Form>
  );
};

export default Settings;
