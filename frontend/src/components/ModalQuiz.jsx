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
}) {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button type="button" onClick={() => closeModal(false)}>
            {" "}
            X{" "}
          </button>
        </div>

        <div className="modalBody">
          {isFinished ? (
            <EndGame score={score} />
          ) : (
            <CorrectAnswer
              answer={answer}
              correctAnswer={correctAnswer}
              score={score}
              tip={tip}
              questionNumber={questionNumber}
              setIsFinished={setIsFinished}
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
  answer: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
  }),
};

ModalQuiz.defaultProps = {
  closeModal: () => {},
  correctAnswer: true,
  score: 0,
  questionNumber: 0,
  tip: "Recycling tip",
  answer: {
    src: "",
    alt: "",
    className: "",
  },
};

export default ModalQuiz;
