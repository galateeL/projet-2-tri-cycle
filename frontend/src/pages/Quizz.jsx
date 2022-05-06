import React, { useState, useContext, useEffect, useMemo } from "react";
import Header from "../components/Header";
import DataSheetContext from "../contexts/DataSheetContext";
import QuizContext from "../contexts/QuizContext";

import "./CssPages/Quizz.css";
import ModalQuiz from "../components/ModalQuiz";

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

  // useEffect(() => {
  //   randomQuizz();
  // }, [openModalQuiz1, openModalQuiz2, openModalQuiz3, openModalQuiz4]);

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
      buttonValue === waste[30].fields.reponse1 ||
      buttonValue === waste[8].fields.reponse1 ||
      buttonValue === waste[65].fields.reponse1
    ) {
      setOpenModalQuiz2(true);
      setCounter(counter + 1);
    } else setOpenModalQuiz1(true);
    setCounter(counter + 1);
    setCounterScore(counterScore + 1);
  }
  const QuestRand = useMemo(() => randomQuizz, []);
  return (
    <div>
      <Header />
      <QuizContext.Provider value={QuestRand}>
        <section className="playContainer">
          <div>
            <h1 id="play">A toi de jouer !</h1>
            <h2 id="question">Où jettes-tu cet objet ...</h2>
            <h3 className="nameWaste">
              {randomObject !== undefined
                ? randomObject.fields.description
                : ""}{" "}
              ?
            </h3>
            <h4 className="counter">{counter}/5</h4>
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
              <button
                type="submit"
                className="openModalBtn"
                onClick={handleQuiz}
                value="En déchèterie ou écopoint"
              >
                Déchèterie
              </button>
              {openModalQuiz1 ? (
                <ModalQuiz
                  title={randomObject.fields.description}
                  closeModal={setOpenModalQuiz1}
                  correctAnswer={openModalQuiz1}
                  score={counterScore}
                  questionNumber={counter}
                  tip={randomObject.fields.conseil_zero_dechet}
                  answer={randomObject.fields.reponse1}
                />
              ) : null}

              <button
                type="submit"
                className="openModalBtn"
                onClick={handleQuiz}
                value="Dans le sac ou bac jaune"
              >
                Poubelle jaune{" "}
              </button>
              {openModalQuiz2 ? (
                <ModalQuiz
                  closeModal={setOpenModalQuiz2}
                  correctAnswer={openModalQuiz1}
                  score={counterScore}
                  questionNumber={counter}
                  tip={randomObject.fields.conseil_zero_dechet}
                  answer={randomObject.fields.reponse1}
                />
              ) : null}
            </div>
            <div className="answerBtnContainer">
              <button
                type="button"
                className="openModalBtn"
                onClick={handleQuiz}
                value="Dans le sac d’ordures ménagères"
              >
                Ordures ménagères{" "}
              </button>
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
              <button
                type="submit"
                value={
                  randomObject !== undefined ? randomObject.fields.reponse1 : ""
                }
                className="openModalBtn"
                onClick={handleQuiz1}
              >
                Autre{" "}
              </button>
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
      </QuizContext.Provider>
    </div>
  );
}
