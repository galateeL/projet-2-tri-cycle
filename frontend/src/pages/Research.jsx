import React, { useContext } from "react";
import WasteTable from "@components/WasteTable";
import Amount from "@components/Amount";
import More from "@components/More";
import "../components/CssComponents/WasteTable.css";
import HeaderResearchBase from "@components/HeaderResearchBase";
import { Link } from "react-router-dom";
import DataSheetContext from "../contexts/DataSheetContext";

export default function Research() {
  const { waste } = useContext(DataSheetContext);
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
                <Link to={`/WasteDataSheet/${items.recordid}`}>
                  <td>
                    <WasteTable
                      key={`W_${items.recordid}`}
                      object={items.fields.description}
                    />
                  </td>
                </Link>

                <td>
                  <Amount
                    key={`A_${items.recordid}`}
                    object={items.fields.reponse1}
                  />
                </td>

                <td>
                  <More
                    key={`M_${items.recordid}`}
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
