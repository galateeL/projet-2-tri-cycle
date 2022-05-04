import { Link } from "react-router-dom";
import WasteDetails from "../components/WasteDetails";
import "./WasteDataSheet.css";

function WasteDataSheet() {
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
