/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react";
import Array from "@components/Array";
import axios from "axios";
import FristArray from "@components/FirstArray";
import HeaderResearchBase from "@components/HeaderResearchBase";

export default function Research() {
  const [waste, setWaste] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  function handleFilter(event) {
    setFilterWord(event);
  }

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
  return (
    <div className="Research">
      <HeaderResearchBase filterWord={filterWord} handleFilter={handleFilter} />
      <div>
        <FristArray />
        {waste
          .filter((items) =>
            items.fields.description
              .toLowerCase()
              .includes(filterWord.toLowerCase())
          )
          .map((items) => (
            <Array key={items.id} object={items.fields} />
          ))}
      </div>
    </div>
  );
}
