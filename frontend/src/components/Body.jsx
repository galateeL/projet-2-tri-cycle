import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import DataSheetContext from "../contexts/DataSheetContext";
import Home from "../pages/Home";
import Quizz from "../pages/Quizz";
import Research from "../pages/Research";
import WasteDataSheet from "../pages/WasteDataSheet";

export default function Body() {
  // definition state vide
  // remonter API ici
  const [waste, setWaste] = useState([]);
  // a remplacer par le use context (import)
  const getWaste = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_jeter-dechet-nantes-metropole&q=&rows=116"
      )
      .then((response) => response.data)
      .then((data) => {
        setWaste(data.records);
      });
  };
  useEffect(() => {
    getWaste();
  }, []);
  const foo = useMemo(() => ({ foo: { waste } }));
  console.warn(waste);
  console.warn(foo);

  return (
    <div>
      <DataSheetContext.Provider value={foo}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Quizz" element={<Quizz />} />
          <Route path="Research" element={<Research />} />
          <Route path="/WasteDataSheet/:id" element={<WasteDataSheet />} />
        </Routes>
      </DataSheetContext.Provider>
    </div>
  );
}
/* changement "?" ici */
