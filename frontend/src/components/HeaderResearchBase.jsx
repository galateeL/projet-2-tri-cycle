import { NavLink } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import "./CssComponents/HeaderResearch.css";
import logo from "../assets/logo-ss-fond.png";
import home from "../assets/home-white.png";
import research from "../assets/search-white.png";
import filter from "../assets/filter-white.png";
import arrowMenu from "../assets/flechevertemenu.png";
import Dropdown from "./DropDownFilter";

export default function HeaderResearchBase(props) {
  const [inactive, setInactive] = useState(false);
  const { filterWord, handleFilter } = props;

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
          <p>
            <img src={research} alt="home" />
            <div className="search">
              <input
                value={filterWord}
                type="text"
                placeholder="Type here ..."
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              />
            </div>
          </p>
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
  // eslint-disable-next-line react/require-default-props
  filterWord: PropTypes.string,
  handleFilter: PropTypes.func,
};

HeaderResearchBase.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  filterWord: "word",
  handleFilter: () => {},
};
