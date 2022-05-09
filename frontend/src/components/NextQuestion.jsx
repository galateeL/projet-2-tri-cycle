import { React, useContext } from "react";
import PropTypes from "prop-types";
import CounterContext from "../contexts/CounterContext";

function NextQuestion(props) {
  const { questionNumber, setIsFinished } = props;
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className="endGame">
      {questionNumber < 5 ? (
        <div className="nextQuestionBtnContainer">
          <button
            type="button"
            onClick={() => setCount(count + 1)}
            classeName="nextQuestionBtn"
          >
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
