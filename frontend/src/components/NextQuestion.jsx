import React, { useContext } from "react";
import PropTypes from "prop-types";
import QuizContext from "../contexts/QuizContext";
import nextQuestionButton from "../assets/next-white.png";

function NextQuestion(props) {
  const { closeModal, questionNumber, setIsFinished } = props;
  const QuestRand = useContext(QuizContext);
  function handleClickCloseModalRandomQuiz() {
    closeModal(false);
    QuestRand();
  }
  return (
    <div className="endGame">
      {questionNumber < 6 ? (
        <div className="nextQuestionBtnContainer">
          <button
            type="button"
            onClick={handleClickCloseModalRandomQuiz}
            className="nextQuestionBtn"
          >
            <span>Question suivante</span>
            <img
              src={nextQuestionButton}
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
  closeModal: PropTypes.func,
  questionNumber: PropTypes.number,
  setIsFinished: PropTypes.func,
};

NextQuestion.defaultProps = {
  closeModal: () => {},
  questionNumber: 0,
  setIsFinished: () => {},
};

export default NextQuestion;
