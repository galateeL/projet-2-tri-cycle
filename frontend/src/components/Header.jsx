import { NavLink } from "react-router-dom";
import "./CssComponents/Header.css";
import home from "../assets/home-black.png";
import research from "../assets/search-black.png";
import help from "../assets/question-black.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="first-container-nav">
          <NavLink to="/">
            <img src={home} alt="home" />
          </NavLink>
          <NavLink to="/Research">
            <img src={research} alt="research" />
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
