import React, { useState, useEffect } from "react";
import WasteTable from "@components/WasteTable";
import Amount from "@components/Amount";
import More from "@components/More";
import axios from "axios";
import "../components/CssComponents/WasteTable.css";
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
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>amount</th>
              <th>more</th>
            </tr>
          </thead>
          <tbody>
            {waste.map((items) => (
              <tr>
                <td>
                  <WasteTable
                    key={items.id}
                    object={items.fields.description}
                  />
                </td>
                <td>
                  <Amount key={items.id} object={items.fields.reponse1} />
                </td>
                <td>
                  <More
                    key={items.id}
                    object={items.fields.conseil_zero_dechet}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
