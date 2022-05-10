import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import WasteTable from "../components/WasteTable";
import Amount from "../components/Amount";
import More from "../components/More";
import HeaderResearchBase from "../components/HeaderResearchBase";
import DataSheetContext from "../contexts/DataSheetContext";

export default function Research() {
  const { waste } = useContext(DataSheetContext);
  const [search, setSearch] = useState("");
  return (
    <div className="Research">
      <HeaderResearchBase filterInput={setSearch} />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Objet</th>
              <th> Lieu De Dêpot</th>
              <th>Conseil Recyclage</th>
            </tr>
          </thead>
          <tbody>
            {waste
              .filter((item) =>
                item.fields.description.toLowerCase().includes(search)
              )
              .map((items) => (
                <tr>
                  <td>
                    <Link to={`/WasteDataSheet/${items.recordid}`}>
                      <WasteTable
                        key={`W_${items.recordid}`}
                        object={items.fields.description}
                      />
                    </Link>
                  </td>

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
