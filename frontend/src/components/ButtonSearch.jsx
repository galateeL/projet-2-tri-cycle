import { Link } from "react-router-dom";

export default function ButtonSearch() {
  return (
    <Link className="linkButton" to="/Research">
      <button className="buttonSearch" type="button">
        recherche
      </button>
    </Link>
  );
}
