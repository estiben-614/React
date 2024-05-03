import { useState } from "react";

const TodoAdd = ({ onHandleTodoForm }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onHandleTodoForm(e, value);
        setValue("");
      }}
    >
      <input
        type="text"
        placeholder="Añada un TODO"
        className="form-control"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
