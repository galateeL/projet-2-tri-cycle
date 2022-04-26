import React, { useState } from "react";
import "./CssComponents/ModalQuizz.css";
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
  closeModal: PropTypes.string,
  correctAnswer: PropTypes.bool,
  score: PropTypes.number,
  questionNumber: PropTypes.number,
  tip: PropTypes.string,
  answer: PropTypes.number,
};

ModalQuiz.defaultProps = {
  closeModal: "Fermeture de la modal",
  correctAnswer: true,
  score: 0,
  questionNumber: 0,
  tip: "Recycling tip",
  answer: 0,
};

export default ModalQuiz;
