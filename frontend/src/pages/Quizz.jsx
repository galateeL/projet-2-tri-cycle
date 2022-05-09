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
    const randomtoto = Math.floor(Math.random() * waste.length);

    return setRandomObject(waste[randomtoto]);
  }
  useEffect(() => {
    randomQuizz();
  }, [waste]);
  useEffect(() => {
    if (counter > 6) {
      setCounter(1);
    }
  }, [counter]);
  const [openModalQuiz1, setOpenModalQuiz1] = useState(false);
  const [openModalQuiz2, setOpenModalQuiz2] = useState(false);
  const [openModalQuiz3, setOpenModalQuiz3] = useState(false);
  const [openModalQuiz4, setOpenModalQuiz4] = useState(false);
  useEffect(() => {
    randomQuizz();
  }, [openModalQuiz1, openModalQuiz2, openModalQuiz3, openModalQuiz4]);
  function handleQuiz(e) {
    if (e.nativeEvent.target.value === randomObject.fields.reponse1) {
      setOpenModalQuiz1(true);
      setCounter(counter + 1);
      setCounterScore(counterScore + 1);
    } else setOpenModalQuiz2(true);
    setCounter(counter + 1);
  }
  function handleQuiz1(e) {
    const buttonValue = e.nativeEvent.target.value;
    if (
      buttonValue === "En déchèterie ou écopoint" ||
      buttonValue === "Dans le sac ou bac jaune" ||
      buttonValue === "Dans le sac d’ordures ménagères"
    ) {
      setOpenModalQuiz2(true);
      setCounter(counter + 1);
    } else setOpenModalQuiz1(true);
    setCounter(counter + 1);
    setCounterScore(counterScore + 1);
  }
  return (
    <div>
      <Header />
      <section className="playContainer">
        <div>
          <h1 id="play">A toi de jouer !</h1>
          <div className="Container">
            <h4 className="counter">{counter}/4</h4>
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
        </div>
        <div className="pictureButton">
          <div className="answerBtnContainer">
            <AnswerButton
              id="En_déchèterie"
              onClick={(e) => handleQuiz(e)}
              value="En déchèterie ou écopoint"
            />
            {openModalQuiz1 ? (
              <ModalQuiz
                title={randomObject.fields.description}
                closeModal={setOpenModalQuiz1}
                correctAnswer={openModalQuiz1}
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
              id="bac-jaune"
              onClick={(e) => handleQuiz(e)}
              value="Dans le sac ou bac jaune"
            />
            {openModalQuiz2 ? (
              <ModalQuiz
                closeModal={setOpenModalQuiz2}
                correctAnswer={openModalQuiz1}
                score={counterScore}
                questionNumber={counter}
                tip={randomObject.fields.conseil_zero_dechet}
                answer={
                  <img
                    src="src/assets/yellow-container.png"
                    alt="yellow bin"
                    className="yellowBinImg"
                  />
                }
              />
            ) : null}
          </div>
          <div className="answerBtnContainer">
            <AnswerButton
              id="sac_d’ordures_ménagères"
              onClick={(e) => handleQuiz(e)}
              value="Dans le sac d’ordures ménagères"
            />
            {openModalQuiz3 ? (
              <ModalQuiz
                closeModal={setOpenModalQuiz3}
                correctAnswer={openModalQuiz1}
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
              id="autes"
              onClick={(e) => handleQuiz1(e)}
              value={
                randomObject !== undefined ? randomObject.fields.reponse1 : ""
              }
            />
            {openModalQuiz4 ? (
              <ModalQuiz
                closeModal={setOpenModalQuiz4}
                correctAnswer={openModalQuiz1}
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
      </section>
    </div>
  );
}
