import { NavLink } from "react-router-dom";
import "./CssComponents/Header.css";
import homeWhite from "../assets/homeWhite3.png";
import research from "../assets/loupeWhite.png";
import quiz from "../assets/quizWhite4.png";
import help from "../assets/envelope2.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="first-container-nav">
          <NavLink to="/">
            <img src={homeWhite} alt="home" />
          </NavLink>
          <NavLink to="/Research">
            <img src={research} alt="research" />
          </NavLink>
          <NavLink to="/QuizHome">
            <img src={quiz} alt="research" />
          </NavLink>
        </div>
        <div className="second-container-nav">
          <NavLink to="/contactForm">
            <img src={help} alt="help" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
