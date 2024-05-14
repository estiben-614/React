import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function LoginPage() {
  const {
    user,
    setUser,
  } = useContext(UserContext);

  const userInfo = {
    name: 'Estiben Fernandez',
    id: 1515,
  };
  return (
      <>
          <h1>{!user ? 'Login Page' :  `Bienvenido ${user.name}`}</h1>
          <hr />

          {
            user && (
            <pre>
                {
              JSON.stringify(user, null, 3)
              }
            </pre>
            )
          }

          <button
              className="btn btn-primary"
              onClick={() => setUser(userInfo)}>
              Establecer usuario
          </button>

          {
            user && (
            <button
                className="btn btn-danger"
                onClick = {() => setUser()}
          >
                Cerrar Sesión
            </button>
            )
          }
      </>
  );
}
