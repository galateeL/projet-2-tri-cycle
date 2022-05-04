import { Link } from "react-router-dom";
// import { useContext } from "react";
import WasteDetails from "../components/WasteDetails";
// import DataSheetContext from "../contexts/DataSheetContext";
import "./WasteDataSheet.css";

function WasteDataSheet() {
  // const [waste, setWaste] = useContext(DataSheetContext);
  return (
    <div className="wasteDataSheetPage">
      <div className="wasteDataSheetContainer">
        <WasteDetails />
      </div>
      <Link className="linkpreviousPage" to="/Research">
        <button className="previousPageBtn" type="button">
          Retour
        </button>
      </Link>
    </div>
  );
}

export default WasteDataSheet;
