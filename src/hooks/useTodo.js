import { useEffect, useReducer } from "react";
import { todoReducer } from "../08 - useReducer/todoReducer";

export const useTodo = () => {
  const initialValues = JSON.parse(localStorage.getItem("todo")) || [];
  const [todos, dispatch] = useReducer(todoReducer, initialValues);
  
  const onHandleTodoForm = (event, value) => {
    event.preventDefault();
    if (value.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: value,
      done: false,
    };
    const action = {
      type: "ADD",
      payload: newTodo,
    };
    dispatch(action);
  };
  const onHandleDeleteTodo = (event, todo) => {
    event.preventDefault();
    const action = {
      type: "DELETE",
      payload: todo,
    };
    dispatch(action);
  };
  const onHandleCompleteTodo = (event, todo) => {
    event.preventDefault();
    const action = {
      type: "COMPLETE",
      payload: {
        ...todo,
        done: !todo.done,
      },
    };
    dispatch(action);
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    onHandleTodoForm,
    onHandleCompleteTodo,
    onHandleDeleteTodo,

  };
};
