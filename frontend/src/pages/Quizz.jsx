import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import DataSheetContext from "../contexts/DataSheetContext";

import "./CssPages/Quizz.css";
import ModalQuiz from "../components/ModalQuiz";

export default function Quizz() {
  const { waste } = useContext(DataSheetContext);
  const [randomObject, setRandomObject] = useState();
  function randomQuizz() {
    const randomtoto = Math.floor(Math.random() * waste.length);
    return setRandomObject(waste[randomtoto]);
  }

  useEffect(() => {
    randomQuizz();
  }, [waste]);

  const [openModalQuiz1, setOpenModalQuiz1] = useState(false);
  const [openModalQuiz2, setOpenModalQuiz2] = useState(false);
  const [openModalQuiz3, setOpenModalQuiz3] = useState(false);
  const [openModalQuiz4, setOpenModalQuiz4] = useState(false);

  function handleQuiz(e) {
    if (e.nativeEvent.target.value === randomObject.fields.reponse1) {
      setOpenModalQuiz1(true);
    } else setOpenModalQuiz2(true);
  }

  function handleQuiz1(e) {
    if (
      e.nativeEvent.target.value === waste[30].fields.reponse1 ||
      e.nativeEvent.target.value === waste[8].fields.reponse1 ||
      e.nativeEvent.target.value === waste[65].fields.reponse1
    ) {
      setOpenModalQuiz2(true);
    } else setOpenModalQuiz1(true);
  }

  return (
    <div>
      <Header />
      <section className="playContainer">
        <div>
          <h1 id="play">A toi de jouer !</h1>
          <h2 id="question">Où jettes-tu cet objet ...</h2>
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
                score={4}
                questionNumber={5}
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
                score={2}
                questionNumber={4}
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
                score={2}
                questionNumber={5}
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
                score={2}
                questionNumber={4}
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
