const TodoList = ({ todos, onHandleDeleteTodo, onHandleCompleteTodo }) => {
  return todos.map((todo) => (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
      onClick={(e) => onHandleCompleteTodo(e, todo)}
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}>
        {todo.description}
        </span>
      <button
        className="btn btn-danger"
        onClick={(e) => onHandleDeleteTodo(e, todo)}>
          Borrar</button>
    </li>
  ));
};

export default TodoList;
