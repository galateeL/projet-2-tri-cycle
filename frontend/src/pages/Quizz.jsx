import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import DataSheetContext from "../contexts/DataSheetContext";
import "./CssPages/Quizz.css";
import ModalQuiz from "../components/ModalQuiz";
import AnswerButton from "../components/AnswerButton";

export default function Quizz() {
  const { waste } = useContext(DataSheetContext);
  const [counterScore, setCounterScore] = useState(0);
  const [counter, setCounter] = useState(1);
  const [randomObject, setRandomObject] = useState();

  function randomQuizz() {
    const randomQuestion = Math.floor(Math.random() * waste.length);

    return setRandomObject(waste[randomQuestion]);
  }
  useEffect(() => {
    randomQuizz();
  }, [waste]);
  useEffect(() => {
    if (counter > 6) {
      setCounter(1);
    }
  }, [counter]);

  const [openModalQuizTrue, setOpenModalQuizTrue] = useState(false);
  const [openModalQuizFalse, setOpenModalQuizFalse] = useState(false);
  const [openModalQuizFinishGame, setOpenModalQuizFinishGame] = useState(false);
  const [openModalQuizFinalScore, setOpenModalQuizFinalScore] = useState(false);

  function handleQuiz(e) {
    if (e.nativeEvent.target.value === randomObject.fields.reponse1) {
      setOpenModalQuizTrue(true);
      setCounter(counter + 1);
      setCounterScore(counterScore + 1);
    } else setOpenModalQuizFalse(true);
    setCounter(counter + 1);
  }
  function handleQuiz1(e) {
    const buttonValue = e.nativeEvent.target.value;
    if (
      buttonValue === "En déchèterie ou écopoint" ||
      buttonValue === "Dans le sac ou bac jaune" ||
      buttonValue === "Dans le sac d’ordures ménagères"
    ) {
      setOpenModalQuizFalse(true);
      setCounter(counter + 1);
    } else setOpenModalQuizTrue(true);
    setCounter(counter + 1);
    setCounterScore(counterScore + 1);
  }
  return (
    <div>
      <Header />
      <section className="playContainer">
        <div className="playContainer2" >
          <h1 id="play">A toi de jouer !</h1>
          <div className="Container">
            <h4 className="counter">{counter}/5</h4>
            <h2 id="question">Où jettes-tu cet objet ...</h2>
          </div>
          <h3 className="nameWaste">
            {randomObject !== undefined ? randomObject.fields.description : ""}{" "}
            ?
          </h3>
          <img
            className="waste"
            src={
              randomObject !== undefined ? randomObject.fields.nom_image : ""
            }
            alt="dechet"
          />
          <div className="pictureButton">
            <div className="answerBtnContainer">
              <AnswerButton
                id="En_decheterie"
                onClick={(e) => handleQuiz(e)}
                value="En déchèterie ou écopoint"
              />
              {openModalQuizTrue ? (
                <ModalQuiz
                  title={randomObject.fields.description}
                  closeModal={setOpenModalQuizTrue}
                  correctAnswer={openModalQuizTrue}
                  score={counterScore}
                  questionNumber={counter}
                  tip={randomObject.fields.conseil_zero_dechet}
                  answer={randomObject.fields.reponse1}
                />
              ) : null}

              <AnswerButton
                id="bac-jaune"
                onClick={(e) => handleQuiz(e)}
                value="Dans le sac ou bac jaune"
              />
              {openModalQuizFalse ? (
                <ModalQuiz
                  closeModal={setOpenModalQuizFalse}
                  correctAnswer={openModalQuizTrue}
                  score={counterScore}
                  questionNumber={counter}
                  tip={randomObject.fields.conseil_zero_dechet}
                  answer={randomObject.fields.reponse1}
                />
              ) : null}
            </div>
            <div className="answerBtnContainer">
              <AnswerButton
                id="sac_d-ordures_menageres"
                onClick={(e) => handleQuiz(e)}
                value="Dans le sac d’ordures ménagères"
              />
              {openModalQuizFinishGame ? (
                <ModalQuiz
                  closeModal={setOpenModalQuizFinishGame}
                  correctAnswer={openModalQuizTrue}
                  score={counterScore}
                  questionNumber={counter}
                  tip={randomObject.fields.conseil_zero_dechet}
                  answer={{
                    src: "src/assets/yellow-container.png",
                    alt: "yellow bin",
                    className: "yellowBinImg",
                  }}
                />
              ) : null}
              <AnswerButton
                id="autres"
                onClick={(e) => handleQuiz1(e)}
                value={
                  randomObject !== undefined ? randomObject.fields.reponse1 : ""
                }
              />
              {openModalQuizFinalScore ? (
                <ModalQuiz
                  closeModal={setOpenModalQuizFinalScore}
                  correctAnswer={openModalQuizTrue}
                  score={counterScore}
                  questionNumber={counter}
                  tip={randomObject.fields.conseil_zero_dechet}
                  answer={{
                    src: "src/assets/yellow-container.png",
                    alt: "yellow bin",
                    className: "yellowBinImg",
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
