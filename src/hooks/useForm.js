import { useState } from "react";

export const useForm = (initialValues) => {
  const [formState, setFormState] = useState(initialValues);

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onResetForm = () => {
    const objectVacio= Object.keys(initialValues).reduce((acum, key) => {
        return {...acum, [key] : ''}
    }, {})
    setFormState(objectVacio)
  };
  return {
    ...formState,
    setFormState,
    onChangeInput,
    formState,
    onResetForm,
  };
};
