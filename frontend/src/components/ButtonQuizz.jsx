import { Link } from "react-router-dom";

export default function ButtonQuizz() {
  return (
    <Link className="linkButton" to="/QuizHome">
      <button className="buttonQuizz" type="button">
        jeu
      </button>
    </Link>
  );
}
