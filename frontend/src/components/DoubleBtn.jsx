import React from "react";
import { Link } from "react-router-dom";

function DoubleBtn() {
  return (
    <div className="doubleBtn">
      <div className="homeBtnContainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button type="button" className="btnWhite" onClick="homeBtn">
            <span className="homeTxt">Accueil</span>
            <img
              src="src/assets/home-white.png"
              alt="home"
              className="homeImg"
            />
          </button>
        </Link>
      </div>

      <div className="retryBtnContainer">
        <Link to="/quizHome" style={{ textDecoration: "none" }}>
          <button type="button" className="btnWhite" onClick="retryBtn">
            <span className="retryTxt">Rejouer</span>
            <img
              src="src/assets/next-white.png"
              alt="retry"
              className="retryImg"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DoubleBtn;
