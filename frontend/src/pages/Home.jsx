import trioPoubelles from "../assets/recycling-color.png";
import ButtonSearch from "../components/ButtonSearch";
import ButtonFleche from "../components/ButtonFleche";
import ButtonQuizz from "../components/ButtonQuizz";
import Header from "../components/Header";
import logo from "../assets/logo-ss-fond.png";
import "./PagesCss/Home.css";
import glassBlue from "../assets/glass-blue.png";
import rubikGame from "../assets/rubik-game.png";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="topPage">
        <img className="logoImage" src={logo} alt="LOGO" />
        {/* <h1 className="triTitre">tri&apos;cycle</h1> */}
        <p className="presentation1">
          Bienvenue sur <span className="appName">tri&apos;cycle</span>
          {` , l'application`} pour parfaire vos connaissances sur le tri et le
          recyclage des déchets. Pensée pour toute la famille, apprenez en plus,
          tout en vous amusant !
        </p>
        <p className="presentation2">A vous de jouer ...</p>
        <ButtonFleche />
      </div>
      <div className="tripoubelles">
        <h1>faites votre choix !</h1>
        <img
          className="logoTriPoubelles"
          src={trioPoubelles}
          alt="triPoubelles"
        />
      </div>
      <div className="bottomPage">
        <div className="divQuizz">
          <div className="divButtonQuizz">
            <ButtonQuizz />
            <img src={rubikGame} className="imgQuizzButton" alt="QuizzImg" />
          </div>

          <p className="pQ">
            <span className="bigTri">Etes-vous prêt pour le grand tri ? </span>
            Faites le point et testez vos connaissances grâce au{" "}
            <span className="triQuiz">tri quiz</span> 😉 !
          </p>
        </div>
        <div className="divSearch">
          <div className="divButtonSearch">
            <ButtonSearch />
            <img src={glassBlue} className="imgSearchButton" alt="SearchImg" />
          </div>
          <p className="pS">
            Une interrogation sur la destination tri {`d'un`} déchet ? Explorez
            la page <span className="recherchePage">recherche</span> 🤓 !
          </p>
        </div>
      </div>
    </div>
  );
}
