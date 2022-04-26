import React from "react";
import PropTypes from "prop-types";
import Score from "./Score";
import DoubleBtn from "./DoubleBtn";

function EndGame({ score }) {
  return (
    <div className="endGameContainer">
      {score > 3 ? (
        <div>
          <div className="congratsContainer">
            <h4>Bravo !</h4>
            <img
              src="assets/trophee.png"
              alt="congratulations"
              className="congratsImg"
            />
          </div>
          <Score score={score} />
          <div className="Essai appel composant 2 boutons">
            <DoubleBtn />
          </div>
        </div>
      ) : (
        <div>
          <div className="tryAgainContainer">
            <h4>Tu y es presque, la prochaine fois sera la bonne !</h4>
            <img
              src="assets/refresh.png"
              alt="try again"
              className="tryAgainImg"
            />
          </div>
          <Score score={score} />
          <div className="DoubleBtnContainer">
            <DoubleBtn />
          </div>
        </div>
      )}
    </div>
  );
}

EndGame.propTypes = {
  score: PropTypes.number,
};

EndGame.defaultProps = {
  score: 0,
};
export default EndGame;
