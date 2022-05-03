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
  const [house, setHouse] = useState([]);
  useEffect(() => {
    setHouse(waste.map((item) => item));
    getWaste();
  }, []);

  function handlevalue(e) {
    const wasteCollection = e.nativeEvent.target.value;
    if (wasteCollection === "En déchèterie ou écopoint") {
      setHouse(
        waste
          .filter((ele) => ele.fields.reponse1 === "En déchèterie ou écopoint")
          .map((item) => item)
      );
    }
    if (wasteCollection === "Dans le sac ou bac jaune") {
      setHouse(
        waste
          .filter((ele) => ele.fields.reponse1 === "Dans le sac ou bac jaune")
          .map((item) => item)
      );
    }
    if (wasteCollection === "Dans le sac d’ordures ménagères") {
      setHouse(
        waste
          .filter(
            (ele) => ele.fields.reponse1 === "Dans le sac d’ordures ménagères"
          )
          .map((item) => item)
      );
    }
    if (wasteCollection === "autre") {
      setHouse(
        waste
          .filter(
            (ele) =>
              ele.fields.reponse1 !== "Dans le sac d’ordures ménagères" &&
              ele.fields.reponse1 !== "Dans le sac ou bac jaune" &&
              ele.fields.reponse1 !== "En déchèterie ou écopoint"
          )
          .map((item) => item)
      );
    }
    if (wasteCollection === "Totalité") {
      setHouse(waste.map((item) => item));
    }
  }
  return (
    <div className="Research">
      <HeaderResearchBase />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>
                <select onChange={handlevalue}>
                  <option value="Totalité">tous les déchets</option>
                  <option value="En déchèterie ou écopoint">déchettrie</option>
                  <option value="Dans le sac ou bac jaune">
                    poubelle jaune
                  </option>
                  <option value="Dans le sac d’ordures ménagères">
                    ordures menagere{" "}
                  </option>
                  <option value="autre">autre</option>
                </select>
              </th>
              <th>more</th>
            </tr>
          </thead>
          <tbody>
            {/* {waste.map((items) => (
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
            ))} */}
            {house.map((items) => (
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
