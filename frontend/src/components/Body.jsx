import Home from "@pages/Home";
import Quizz from "@pages/Quizz";
import Research from "@pages/Research";
// eslint-disable-next-line import/no-unresolved
import { Routes, Route } from "react-router-dom";

export default function Body() {
  return (
    <div className="Body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Quizz" element={<Quizz />} />
        <Route path="Research" element={<Research />} />
      </Routes>
    </div>
  );
}
