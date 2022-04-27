import React from "react";

function DoubleBtn() {
  return (
    <div className="doubleBtn">
      <div className="homeBtnContainer">
        <button type="button" className="btnWhite" onClick="homeBtn">
          {/* Lien vers la page home à rajouter au clic */}
          <span className="homeTxt">Accueil</span>
          <img src="src/assets/home-white.png" alt="home" className="homeImg" />
        </button>
      </div>

      <div className="retryBtnContainer">
        <button type="button" className="btnWhite" onClick="retryBtn">
          {/* Lien vers la page jeu à rajouter au clic */}
          <span className="retryTxt">Rejouer</span>
          <img
            src="src/assets/next-white.png"
            alt="retry"
            className="retryImg"
          />
        </button>
      </div>
    </div>
  );
}

export default DoubleBtn;
