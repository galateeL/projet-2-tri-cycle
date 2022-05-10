import PropTypes from "prop-types";
import NextQuestion from "./NextQuestion";
import Score from "./Score";
import Tip from "./Tip";

function CorrectAnswer(props) {
  const {
    answer,
    closeModal,
    correctAnswer,
    score,
    tip,
    questionNumber,
    setIsFinished,
  } = props;
  return (
    <div>
      {correctAnswer ? (
        <div className="correctAnswer">
          <img
            src="src/assets/validate.png"
            alt="perfect"
            className="perfectImg"
          />
          <p className="goodGame">
            Bien joué ! <br />
            la bonne réponse est :
          </p>
          <p className="rightAnswerWas">{answer}</p>
          <Score score={score} />
          <Tip tip={tip} />
          <NextQuestion
            questionNumber={questionNumber}
            setIsFinished={setIsFinished}
            closeModal={closeModal}
          />
        </div>
      ) : (
        <div className="wrongAnswerContainer">
          <div className="wrongAnswer">
            <img
              src="src/assets/wrong.png"
              alt="wrong answer"
              className="wrongAnswerImg"
            />
          </div>
          <div className="correctAnswerContainer">
            <h5>la bonne réponse était</h5>
            <p className="rightAnswerWas">{answer}</p>
          </div>
          <Score score={score} />
          <Tip tip={tip} />
          <NextQuestion
            questionNumber={questionNumber}
            setIsFinished={setIsFinished}
            closeModal={closeModal}
          />
        </div>
      )}
    </div>
  );
}

CorrectAnswer.propTypes = {
  answer: PropTypes.string,
  closeModal: PropTypes.func,
  correctAnswer: PropTypes.bool,
  score: PropTypes.number,
  tip: PropTypes.string,
  questionNumber: PropTypes.number,
  setIsFinished: PropTypes.func,
};

CorrectAnswer.defaultProps = {
  answer: "",
  closeModal: () => {},
  correctAnswer: true,
  score: 0,
  tip: "Recycling tip",
  questionNumber: 0,
  setIsFinished: () => {},
};

export default CorrectAnswer;
