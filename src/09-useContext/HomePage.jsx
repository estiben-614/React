import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function HomePage() {
  const {
    user,
  } = useContext(UserContext);
  return (
      <>
          <h1>{`Home Page ${user?.name || ''}`}</h1>
          <hr />
      </>
  );
}
