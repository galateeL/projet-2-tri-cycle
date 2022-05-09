import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Quizz from "../pages/Quizz";
import DataSheetContext from "../contexts/DataSheetContext";
import CounterContext from "../contexts/CounterContext";
import Home from "../pages/Home";
import QuizHome from "../pages/QuizHome";
import Research from "../pages/Research";

export default function Body() {
  const [waste, setWaste] = useState([]);
  const [count, setCount] = useState(1);
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
  const foo = useMemo(() => ({ waste }), [waste]);
  return (
    <div>
      <DataSheetContext.Provider value={foo}>
        <CounterContext.Provider value={(count, setCount)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="QuizHome" element={<QuizHome />} />
            <Route path="Research" element={<Research />} />
            <Route path="Quizz" element={<Quizz />} />
          </Routes>
        </CounterContext.Provider>
      </DataSheetContext.Provider>
    </div>
  );
}
