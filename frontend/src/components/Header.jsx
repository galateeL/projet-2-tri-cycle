import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <NavLink to="Home"> Home </NavLink>
      <NavLink to="Quizz"> Quizz </NavLink>
      <NavLink to="Research"> Research </NavLink>
    </nav>
  );
}
