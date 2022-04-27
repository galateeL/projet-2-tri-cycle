import React, { useState, useEffect } from "react";
import Array from "@components/Array";
import axios from "axios";
import FristArray from "@components/FirstArray";
import HeaderResearchBase from "@components/HeaderResearchBase";

export default function Research() {
  const [waste, setWaste] = useState([]);

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
      <HeaderResearchBase />
      <div>
        <FristArray key={waste.id} object={waste.fields} />
        {waste.map((items) => (
          <Array key={items.id} object={items.fields} />
        ))}
      </div>
    </div>
  );
}
