import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataSheetContext from "../contexts/DataSheetContext";

function WasteDetails() {
  const { waste } = useContext(DataSheetContext);
  const { id } = useParams();

  function searchId() {
    const array = waste.find((item) => item.recordid === id);
    return array;
  }

  return (
    <div>
      <div className="wasteImgContainer">
        <img className="wasteImg" src={searchId().fields.nom_image} alt="" />
      </div>
      <h1 className="wasteName">{searchId().fields.description}</h1>

      <div className="matiere">{searchId().fields.matiere}</div>
      <h2 className="disposeOfWasteTitle">Où le jeter/recycler ?</h2>
      <div className="disposeOfWaste">{searchId().fields.reponse1}</div>
      <h2 className="tipWasteTitle">Conseil zéro déchet</h2>
      <div className="tipWaste">{searchId().fields.conseil_zero_dechet}</div>
    </div>
  );
}

export default WasteDetails;
