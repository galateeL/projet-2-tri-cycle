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
          <img
            src="src/assets/validate.png"
            alt="perfect"
            className="perfectImg"
          />
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
              src="src/assets/wrong.png"
              alt="wrong answer"
              className="wrongAnswerImg"
            />
          </div>
          <div className="correctAnswerContainer">
            <h5>la bonne réponse était</h5>
            <img
              src={answer.src}
              alt={answer.alt}
              className={answer.className}
            />
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
  answer: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
  }),
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
  correctAnswer: true,
  score: 0,
  tip: "Recycling tip",
  questionNumber: 0,
  setIsFinished: () => {},
};

export default CorrectAnswer;
