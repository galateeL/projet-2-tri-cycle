import React from "react";
import { Link } from "react-router-dom";
import homeWhite from "../assets/home-white.png";
import nextWhite from "../assets/next-white.png";

function DoubleBtn() {
  return (
    <div className="doubleBtn">
      <div className="homeBtnContainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button type="button" className="btnWhite" onClick="homeBtn">
            <span className="homeTxt">Accueil</span>
            <img src={homeWhite} alt="home" className="homeImg" />
          </button>
        </Link>
      </div>

      <div className="retryBtnContainer">
        <Link to="/Quiz" style={{ textDecoration: "none" }}>
          <button type="button" className="btnWhite" onClick="retryBtn">
            <span className="retryTxt">Rejouer</span>
            <img src={nextWhite} alt="retry" className="retryImg" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DoubleBtn;
