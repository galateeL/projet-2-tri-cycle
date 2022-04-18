import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="menuResearch">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/Quizz"> Quizz </NavLink>
      <NavLink to="/Research"> Research </NavLink>
    </nav>
  );
}
