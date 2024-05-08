import { Link } from "react-router-dom";

export const NavBar = () => (
  <>
    <Link to={"/"}> Inicio </Link>
    <Link to={"/home"}> Home </Link>
    <Link to={"/login"}> Login </Link>
  </>
);
