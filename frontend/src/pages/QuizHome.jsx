import Header from "@components/Header";
import PlayQuizBtn from "@components/PlayQuizBtn";
import ExitQuizBtn from "@components/ExitQuizBtn";
import rubikIcon from "../assets/rubik-game.png";
import planetEarth from "../assets/planet-earth.png";
import "./CssPages/QuizHome.css";

function QuizHome() {
  return (
    <div className="quizHomeContainer">
      <Header />
      <div className="containerQuizHome">
        <div className="titleQuizHomeContainer">
          <h1 className="titleQuizHome">Quiz </h1>
          <img src={rubikIcon} className="rubikIcon" alt="rubik icon" />
        </div>
        <div className="btnContainerQuizHome">
          <div className="playBtnContainer">
            <PlayQuizBtn />
          </div>
          <img src={planetEarth} alt="planet Earth" />
          <div className="exitBtnContainer">
            <ExitQuizBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizHome;
