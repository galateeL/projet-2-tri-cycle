import React from "react";
import PropTypes from "prop-types";

function NextQuestion(props) {
  const { questionNumber, setIsFinished } = props;
  return (
    <div className="endGame">
      {questionNumber < 5 ? (
        <div className="nextQuestionBtnContainer">
          <button type="button" onClick="" classeName="nextQuestionBtn">
            <span>Question suivante</span>
            <img
              src="assets/next-white.png"
              alt="next question"
              className="nextQuestionImg"
            />
            {/* Lien vers la question suivante page quizzQuestion suivante<img src="assets/next-white.png" alt="next question" className="nextQuestionImg"/> */}
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="endBtn"
          onClick={() => {
            setIsFinished(true);
          }}
        >
          Terminer
        </button>
      )}
    </div>
  );
}

NextQuestion.propTypes = {
  questionNumber: PropTypes.number,
  setIsFinished: PropTypes.bool,
};

NextQuestion.defaultProps = {
  questionNumber: 0,
  setIsFinished: false,
};

export default NextQuestion;
