import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

const TodoApp = () => {
  const {
    todos,
    onHandleTodoForm,
    onHandleCompleteTodo,
    onHandleDeleteTodo,
  } = useTodo()
  return (
    <>
      <div className="row">
        <div className="col-7">
          <h1>{`TodoApp (${todos.length})`}</h1>
        </div>
        <div className="col-2">
          <h3>{`Pendientes ${todos.filter((todo) => !todo.done).length}`}</h3>
        </div>
        <div className="col-3">
        <h3>{`Completados ${todos.filter((todo) => todo.done).length}`}</h3>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <TodoList
              todos={todos}
              onHandleCompleteTodo={onHandleCompleteTodo}
              onHandleDeleteTodo={onHandleDeleteTodo}
            />
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onHandleTodoForm={onHandleTodoForm} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
