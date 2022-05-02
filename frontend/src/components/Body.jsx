import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Quizz from "../pages/Quizz";
import Research from "../pages/Research";
import WasteDataSheet from "../pages/WasteDataSheet";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Quizz" element={<Quizz />} />
        <Route path="Research" element={<Research />} />
        <Route path="WasteDataSheet" element={<WasteDataSheet />} />
      </Routes>
    </div>
  );
}
/* changement "?" ici */
