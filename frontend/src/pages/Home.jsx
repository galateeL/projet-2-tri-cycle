
import trioPoubelles from "../assets/recycling-color.png";
import ButtonSearch from "../components/ButtonSearch";
import ButtonFleche from "../components/ButtonFleche";
import ButtonQuizz from "../components/ButtonQuizz";
import Header from "../components/Header";
import logo from "../assets/logo-ss-fond.png";
import "./PagesCss/Home.css";

export default function Home() {
  return (
    <div>
      <div>
        <nav>
          <Header />
        </nav>
        <div className="logoTitre">
          <img className="logoImage" src={logo} alt="LOGO" />
          <h1 className="triTitre">Tri&apos;cycle</h1>
        </div>
        <p className="presentation">
          Salut! Bienvenue sur Tri&apos;cycle! Vous pourrez apprendre sur
          l&apos;écologie, tout en vous amusant en famille! Cliquez sur le jeux
          pour commencer votre Quizz favori, ou bien, cliquez sur recherche pour
          accéder directement aux fiches informatives et devenir un expert du
          tri! A vous de jouer!
        </p>
      </div>
      <div className="buttonFleche">
        <ButtonFleche />
      </div>
      <div className="triopoubelles">
        <h1>fais ton choix!</h1>
        <img
          className="logoTriPoubelles"
          src={trioPoubelles}
          alt="trioPoubelles"
        />
      </div>
      <div className="divQuizz">
        <div className="divButtonQuizz">
          <ButtonQuizz />
          <img
            src="../src/assets/rubik-game.png"
            className="imgQuizzButton"
            alt="QuizzImg"
          />
        </div>

        <p className="pQ">
          Entrez dans le quizz écologique! Prêt à devenir imbattable sur le ? ?
          ? Go!
        </p>
      </div>
      <div className="divSearch">
        <div className="divButtonSearch">
          <ButtonSearch />
          <img
            src="../src/assets/glass-blue.png"
            className="imgSearchButton"
            alt="SearchImg"
          />
        </div>
        <p className="pS">
          Jeter votre bidon, ou votre chaussette? Oui, mais où?... Ici vous
          toutes nos informations sur le tri, et des astuces!
        </p>
      </div>
    </div>
  );
}
