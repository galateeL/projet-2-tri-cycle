import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Quizz from "../pages/Quizz";
import Research from "../pages/Research";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Quizz" element={<Quizz />} />
        <Route path="Research" element={<Research />} />
      </Routes>
    </div>
  );
}
