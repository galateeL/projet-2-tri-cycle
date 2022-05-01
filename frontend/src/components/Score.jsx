import React from "react";
import PropTypes from "prop-types";

function Score({ score }) {
  return (
    <div className="score">
      <h4>mon score</h4>
      <div className="pointsContainer">
        <h5 className="points">{score}</h5>
      </div>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number,
};

Score.defaultProps = {
  score: 0,
};
export default Score;
