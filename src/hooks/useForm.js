import { useState } from 'react';

const useForm = (defaults) => {
  const [formState, setFormState] = useState(defaults || {});

  const handleChange = (key, val) => {
    setFormState({ ...formState, [key]: val });
  };

  const handleSubmit = (submit) => {
    submit(formState);
  };

  return { handleChange, handleSubmit };
};

export default useForm;
