import React, { useContext } from "react";
import PropTypes from "prop-types";
import QuizContext from "../contexts/QuizContext";
import nextQuestionButton from "../assets/next-white.png";

function NextQuestion(props) {
  const { closeModal, questionNumber, setIsFinished, counter, setCounter } =
    props;
  const QuestRand = useContext(QuizContext);
  function handleClickCloseModalRandomQuiz() {
    setCounter(counter + 1);
    closeModal(false);
    QuestRand();
  }
  return (
    <div className="endGame">
      {questionNumber < 5 ? (
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
  counter: PropTypes.number,
  setCounter: PropTypes.func,
};

NextQuestion.defaultProps = {
  closeModal: () => {},
  questionNumber: 0,
  setIsFinished: () => {},
  counter: 0,
  setCounter: () => {},
};

export default NextQuestion;
