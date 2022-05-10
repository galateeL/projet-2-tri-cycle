import PropTypes from "prop-types";
import wrongAnswer from "../assets/wrong.png";
import NextQuestion from "./NextQuestion";
import Score from "./Score";
import Tip from "./Tip";
import validate from "../assets/validate.png";

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
          <img src={validate} alt="perfect" className="perfectImg" />
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
              src={wrongAnswer}
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
  answer: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
  }),
  closeModal: PropTypes.func,
  correctAnswer: PropTypes.bool,
  score: PropTypes.number,
  tip: PropTypes.string,
  questionNumber: PropTypes.number,
  setIsFinished: PropTypes.func,
};

CorrectAnswer.defaultProps = {
  answer: {
    src: "",
    alt: "",
    className: "",
  },
  closeModal: () => {},
  correctAnswer: true,
  score: 0,
  tip: "Recycling tip",
  questionNumber: 0,
  setIsFinished: () => {},
};

export default CorrectAnswer;
