import { useEffect } from "react";
import Message from "./Message";
import { useForm } from "../hooks/useForm";

export const FormularioSimple = () => {
  const { username, email, password, onChangeInput, formState, onResetForm } = useForm({
    username: "estiben",
    email: "esfer@gmail.com",
    password: "123456",
  });
  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onChangeInput}
      />

      <input
        type="text"
        className="form-control"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChangeInput}
      />
      <input
        type="password"
        className="form-control"
        placeholder="password"
        name="password"
        value={password}
        onChange={onChangeInput}
      />
      {username === "estiben2" && <Message />}

      <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
  );
};
