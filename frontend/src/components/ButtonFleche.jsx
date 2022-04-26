import { Link } from "react-router-dom";
import "./CssComponents/ButtonQuizz.css";

export default function ButtonQuizz() {
  return (
    <div>
      <Link to="/">
        <button className="buttonQuiz" type="button">
          bouton
        </button>
      </Link>
    </div>
  );
}
