import React, { useState } from "react";
import "./CssComponents/ModalQuiz.css";
import PropTypes from "prop-types";

import EndGame from "./EndGame";
import CorrectAnswer from "./CorrectAnswer";

function ModalQuiz({
  closeModal,
  correctAnswer,
  score,
  questionNumber,
  tip,
  answer,
  counter,
  setCounter,
}) {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn" />
        <div className="modalBody">
          {isFinished ? (
            <EndGame score={score} />
          ) : (
            <CorrectAnswer
              answer={answer}
              closeModal={closeModal}
              correctAnswer={correctAnswer}
              score={score}
              tip={tip}
              questionNumber={questionNumber}
              setIsFinished={setIsFinished}
              counter={counter}
              setCounter={setCounter}
            />
          )}
        </div>
      </div>
    </div>
  );
}

ModalQuiz.propTypes = {
  closeModal: PropTypes.func,
  correctAnswer: PropTypes.bool,
  score: PropTypes.number,
  questionNumber: PropTypes.number,
  tip: PropTypes.string,
  answer: PropTypes.string,
  counter: PropTypes.number,
  setCounter: PropTypes.func,
};

ModalQuiz.defaultProps = {
  closeModal: () => {},
  correctAnswer: true,
  score: 0,
  questionNumber: 0,
  tip: "",
  answer: "",
  counter: 1,
  setCounter: () => {},
};

export default ModalQuiz;
