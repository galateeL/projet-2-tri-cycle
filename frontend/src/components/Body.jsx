import Quizz from "@pages/Quizz";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuizHome from "../pages/QuizHome";
import Research from "../pages/Research";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="QuizHome" element={<QuizHome />} />
        <Route path="Research" element={<Research />} />
        <Route path="Quizz" element={<Quizz />} />
      </Routes>
    </div>
  );
}
/* changement "?" ici */
