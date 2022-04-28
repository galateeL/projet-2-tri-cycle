import Header from "../components/Header";
import "../services/Quizz.css";

export default function Quizz() {
  return (
    <div>
      <Header />
      <section>
        <div>
          <h1 className="h1Quizz">A toi de jouer !</h1>
          <h2 id="question">Ou jettes-tu...</h2>
          <h3>Mais quel dommage de jeter ce si bel arrosoir...</h3>
          <img
            className="arrosoir"
            src="/src/assets/arrosoir.JPEG"
            alt="dechet"
          />
        </div>
        <div className="pictureButton">
          <div className="answer">
            <button className="quizzButton" type="button">
              {" "}
              <img
                className="quizzButtonImg"
                src="/src/assets/idea.png"
                alt="dechet"
                height="90"
                width="90"
              />
            </button>
            <button className="quizzButton" type="button">
              {" "}
              <img
                className="quizzButtonImg"
                src="/src/assets/yellow-container.png"
                alt="dechet"
                height="90"
                width="90"
              />
            </button>
          </div>
          <div className="answer">
            <button className="quizzButton" type="button">
              {" "}
              <img
                className="quizzButtonImg"
                src="/src/assets/rubbish-bag.png"
                alt="dechet"
                height="90"
                width="90"
              />
            </button>
            <button className="quizzButton" type="button">
              {" "}
              <img
                className="quizzButtonImg"
                src="/src/assets/glass-blue.png"
                alt="dechet"
                height="90"
                width="90"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
