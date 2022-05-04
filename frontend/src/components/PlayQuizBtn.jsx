import { Link } from "react-router-dom";

export default function PlayQuizBtn() {
  return (
    <Link className="quizHomeBtn" to="/Quizz">
      <button className="playQuizBtn" type="button">
        Jouer
      </button>
    </Link>
  );
}
