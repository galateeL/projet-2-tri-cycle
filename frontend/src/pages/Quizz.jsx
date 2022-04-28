import React, { useState } from "react";
import Header from "@components/Header";

import "./CssPages/Quizz.css";
import ModalQuiz from "@components/ModalQuiz";

export default function Quizz() {
  const [openModalQuiz1, setOpenModalQuiz1] = useState(false);
  const [openModalQuiz2, setOpenModalQuiz2] = useState(false);
  const [openModalQuiz3, setOpenModalQuiz3] = useState(false);
  const [openModalQuiz4, setOpenModalQuiz4] = useState(false);
  return (
    <div>
      <Header />
      <section className="gameContainer">
        <div>
          <h1 id="play">A toi de jouer !</h1>
          <h2 id="question">Ou jettes-tu...</h2>
          <h3 className="nameWaste">un bidon de lessive vide ?</h3>
          <img
            className="waste"
            src="/src/assets/bidon-lessive.png"
            alt="dechet"
          />
        </div>
        <div className="pictureButton">
          <div className="answer">
            <button
              type="button"
              className="openModalBtn"
              onClick={() => {
                setOpenModalQuiz1(true);
              }}
            >
              {" "}
              <img
                src="/src/assets/bennes-decheterie.png"
                alt="dechet"
                height="90"
                width="90"
              />
            </button>
            {openModalQuiz1 ? (
              <ModalQuiz
                closeModal={setOpenModalQuiz1}
                correctAnswer={false}
                score={4}
                questionNumber={5}
                tip="Réutilisez votre bidon de lessive pour le remplir auprès d’un magasin de vrac ou pour y mettre votre lessive faite maison"
                answer={
                  <img
                    src="src/assets/yellow-container.png"
                    alt="yellow bin"
                    className="yellowBinImg"
                  />
                }
              />
            ) : null}

            <button
              type="button"
              className="openModalBtn"
              onClick={() => {
                setOpenModalQuiz2(true);
              }}
            >
              {" "}
              <img
                src="/src/assets/yellow-container.png"
                alt="dechet"
                height="90"
                width="90"
              />
            </button>
            {openModalQuiz2 ? (
              <ModalQuiz
                closeModal={setOpenModalQuiz2}
                correctAnswer
                score={2}
                questionNumber={4}
                tip="Réutilisez votre bidon de lessive pour le remplir auprès d’un magasin de vrac ou pour y mettre votre lessive faite maison"
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
          <div className="answer">
            <button
              type="button"
              className="openModalBtn"
              onClick={() => {
                setOpenModalQuiz3(true);
              }}
            >
              {" "}
              <img
                src="/src/assets/rubbish-bag.png"
                alt="dechet"
                height="90"
                width="90"
              />
            </button>
            {openModalQuiz3 ? (
              <ModalQuiz
                closeModal={setOpenModalQuiz3}
                correctAnswer={false}
                score={2}
                questionNumber={5}
                tip="Réutilisez votre bidon de lessive pour le remplir auprès d’un magasin de vrac ou pour y mettre votre lessive faite maison"
                answer={
                  <img
                    src="src/assets/yellow-container.png"
                    alt="yellow bin"
                    className="yellowBinImg"
                  />
                }
              />
            ) : null}
            <button
              type="button"
              className="openModalBtn"
              onClick={() => {
                setOpenModalQuiz4(true);
              }}
            >
              {" "}
              <img
                src="/src/assets/other-waste-icon.png"
                alt="dechet"
                height="90"
                width="90"
              />
            </button>
            {openModalQuiz4 ? (
              <ModalQuiz
                closeModal={setOpenModalQuiz4}
                correctAnswer={false}
                score={2}
                questionNumber={5}
                tip="Réutilisez votre bidon de lessive pour le remplir auprès d’un magasin de vrac ou pour y mettre votre lessive faite maison"
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
        </div>
      </section>
    </div>
  );
}
