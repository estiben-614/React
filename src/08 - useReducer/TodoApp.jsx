import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";


const TodoApp = () => {
  const initialValues = JSON.parse(localStorage.getItem('todo')) || [];
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
      type: 'ADD',
      payload: newTodo
    }
    dispatch(action)
  };

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <h1>Todo App</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <TodoList todos={todos} />
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onHandleTodoForm={onHandleTodoForm}/>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
