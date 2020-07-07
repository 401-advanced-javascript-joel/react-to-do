import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../hooks/useForm';

const ToDoForm = ({ submit }) => {
  const fields = {
    text: '',
    assignee: '',
    difficulty: 1,
    complete: false,
  };

  const { handleChange, handleSubmit } = useForm(fields);

  return (
    <Form>
      <Form.Group controlId='text'>
        <Form.Label>Text</Form.Label>
        <Form.Control
          required
          as='textarea'
          rows='3'
          placeholder='Pick up some milk from the store...'
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='assignee'>
        <Form.Label>Assignee</Form.Label>
        <Form.Control
          required
          placeholder='Sarah Smalls'
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='difficulty'>
        <Form.Label>Difficulty</Form.Label>
        <Form.Control
          required
          type='range'
          min='1'
          max='5'
          step='1'
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='completed'>
        <Form.Label>Completed</Form.Label>
        <Form.Check
          type='switch'
          label='Yes'
          onChange={(e) => handleChange(e.target.id, e.target.checked)}
        />
      </Form.Group>
      <Button
        variant='primary'
        type='button'
        onClick={() => handleSubmit(submit)}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ToDoForm;
