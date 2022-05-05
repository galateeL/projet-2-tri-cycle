import React from "react";
import PropTypes from "prop-types";

function NextQuestion(props) {
  const { questionNumber, setIsFinished } = props;
  return (
    <div className="endGame">
      {questionNumber < 5 ? (
        <div className="nextQuestionBtnContainer">
          <button type="button" onClick="" className="nextQuestionBtn">
            <span>Question suivante</span>
            <img
              src="src/assets/next-white.png"
              alt="next question"
              className="nextQuestionImg"
            />
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
  setIsFinished: PropTypes.func,
};

NextQuestion.defaultProps = {
  questionNumber: 0,
  setIsFinished: () => {},
};

export default NextQuestion;
