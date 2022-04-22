import { NavLink } from "react-router-dom";
import "./CssComponents/HeaderResearch.css";
import logo from "../assets/logo-ss-fond.png";
import home from "../assets/home-white.png";
import research from "../assets/search-white.png";
import filter from "../assets/filter-white.png";

export default function Header() {
  return (
    <nav className="menuResearch">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="vertical-menu">
        <NavLink to="/">
          <p>
            <img src={home} alt="home" /> Accueil
          </p>
        </NavLink>
        <p>
          <img src={research} alt="home" />
          <input value="entrez votre recherche" />
        </p>
        <p>
          <img src={filter} alt="home" />
        </p>
      </div>
    </nav>
  );
}
