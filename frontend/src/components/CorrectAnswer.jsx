import React from "react";
import PropTypes from "prop-types";
import NextQuestion from "./NextQuestion";
import Score from "./Score";
import Tip from "./Tip";

function CorrectAnswer(props) {
  const { answer, correctAnswer, score, tip, questionNumber, setIsFinished } =
    props;
  return (
    <div>
      {correctAnswer ? (
        <div className="correctAnswer">
          <img src="assets/validate.png" alt="perfect" className="PerfectImg" />
          <Score score={score} />
          <Tip tip={tip} />
          <NextQuestion
            questionNumber={questionNumber}
            setIsFinished={setIsFinished}
          />
        </div>
      ) : (
        <div className="wrongAnswerContainer">
          <div className="wrongAnswer">
            <img
              src="assets/wrong.png"
              alt="wrong answer"
              className="wrongAnswerImg"
            />
          </div>
          <div className="correctAnswerContainer">
            <h5>la bonne réponse était</h5>
            {answer}
          </div>
          <Score score={score} />
          <Tip tip={tip} />
          <NextQuestion
            questionNumber={questionNumber}
            setIsFinished={setIsFinished}
          />
        </div>
      )}
    </div>
  );
}

CorrectAnswer.propTypes = {
  answer: PropTypes.number,
  correctAnswer: PropTypes.bool,
  score: PropTypes.number,
  tip: PropTypes.string,
  questionNumber: PropTypes.number,
  setIsFinished: PropTypes.bool,
};

CorrectAnswer.defaultProps = {
  answer: 0,
  correctAnswer: true,
  score: 0,
  tip: "Recycling tip",
  questionNumber: 0,
  setIsFinished: false,
};

export default CorrectAnswer;
