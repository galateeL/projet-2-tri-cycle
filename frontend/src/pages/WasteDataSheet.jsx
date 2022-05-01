import { Link } from "react-router-dom";
import WasteDetails from "../components/WasteDetails";

import "./WasteDataSheet.css";

function WasteDataSheet() {
  return (
    <div className="wasteDataSheetPage">
      <div className="wasteDataSheetContainer">
        <WasteDetails
          nomImage={
            <img
              src="https://metropole.nantes.fr/banque/public/images/dechets/media/bidon-lessive.jpg"
              alt=""
              className="wasteImg"
            />
          }
          description="Bidon de lessive vide"
          matiere="plastique"
          reponse1="Dans le sac ou bac jaune"
          conseil="Réutilisez votre bidon de lessive pour le remplir auprès d’un magasin de vrac ou pour y mettre votre lessive faite maison"
        />
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
