import { NavLink } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import "./CssComponents/HeaderResearch.css";
import logo from "../assets/logo-ss-fond.png";
import home from "../assets/homeWhite3.png";
import research from "../assets/loupeWhite.png";
import filter from "../assets/filter-white.png";
import arrowMenu from "../assets/double-arrow.png";
import Dropdown from "./dropDownFilter";

export default function HeaderResearchBase({ filterInput }) {
  const [inactive, setInactive] = useState(false);

  const handleShowNav = () => {
    setInactive(!inactive);
  };

  return (
    <nav className="menuResearch">
      <div className={`menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="vertical-menu">
          <div className="open-close">
            <button
              type="button"
              className="navbar_open"
              onClick={handleShowNav}
            >
              <img src={arrowMenu} alt="flèche" />
            </button>
          </div>
          <div className="link-home">
            <NavLink to="/">
              <img src={home} alt="home" />
              <p>Accueil</p>
            </NavLink>
          </div>
          <div className="searchinput">
            <img src={research} alt="home" />
            <div className="search">
              <input
                type="text"
                placeholder="Type here ..."
                onChange={(event) => {
                  filterInput(event.target.value.toLowerCase());
                }}
              />
            </div>
          </div>
          <div className="filter">
            <img src={filter} alt="home" />
            <div className="filter-inactive">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

HeaderResearchBase.propTypes = {
  filterInput: PropTypes.func,
};

HeaderResearchBase.defaultProps = {
  filterInput: () => {},
};
