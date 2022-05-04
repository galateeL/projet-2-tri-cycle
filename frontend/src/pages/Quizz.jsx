import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import DataSheetContext from "../contexts/DataSheetContext";

import "./CssPages/Quizz.css";
import ModalQuiz from "../components/ModalQuiz";

export default function Quizz() {
  const { waste } = useContext(DataSheetContext);
  const [randomObject, setRandomObject] = useState({
    datasetid: "244400404_jeter-dechet-nantes-metropole",
    recordid: "29043c1c95ae8b5b1b546a9f8874bb661dbd5a1d",
    fields: {
      reponse1: "En déchèterie ou écopoint",
      commentaire: 'A déposer dans la benne "autres déchets"',
      image: {
        id: "9b75f79d24a716da9542662aeff7389a",
        mimetype: "image/jpeg",
        height: 1080,
        width: 1080,
        filename: "arrosoir.jpg",
        thumbnail: true,
        format: "JPEG",
        color_summary: [
          "rgba(242, 242, 241, 1.00)",
          "rgba(175, 176, 175, 1.00)",
          "rgba(203, 203, 205, 1.00)",
        ],
      },
      nom_image:
        "https://metropole.nantes.fr/banque/public/images/dechets/media/arrosoir.jpg",
      licence:
        "Photos utilisables en France sans limite de temps, pour l'édition, internet et l'opendata de Nantes Métropole, dans un objectif de sensibilisation ou d'information sur le tri et le recyclage des déchets. Utilisation à des fins commerciales et publicitaires interdite.",
      description: "Arrosoir",
      credit_photo: "François DARBÉ / argentic & numéric productions",
    },
    record_timestamp: "2022-04-30T02:00:00Z",
  });
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
  return (
    <div>
      <Header />
      <section className="playContainer">
        <div>
          <h1 id="play">A toi de jouer !</h1>
          <h2 id="question">Où jettes-tu...</h2>
          <h3 className="nameWaste">
            {randomObject !== undefined ? randomObject.fields.description : ""}
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
              type="button"
              className="openModalBtn"
              onClick={() => {
                setOpenModalQuiz1(true);
              }}
            >
              <img
                src="/src/assets/bennes-decheterie.png"
                className="quizzButtonImgDechetterie"
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
                answer={{
                  src: "src/assets/yellow-container.png",
                  alt: "yellow bin",
                  className: "yellowBinImg",
                }}
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
                className="quizzButtonImgYellowContainer"
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
          <div className="answerBtnContainer">
            <button
              type="button"
              className="openModalBtn"
              onClick={() => {
                setOpenModalQuiz3(true);
              }}
            >
              {" "}
              <img
                className="quizzButtonImg"
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
                answer={{
                  src: "src/assets/yellow-container.png",
                  alt: "yellow bin",
                  className: "yellowBinImg",
                }}
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
                className="quizzButtonImg"
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
