import { Link } from "react-router-dom";

export default function ExitQuizBtn() {
  return (
    <Link className="quizHomeBtn" to="/">
      <button className="exitQuizBtn" type="button">
        Quitter
      </button>
    </Link>
  );
}
