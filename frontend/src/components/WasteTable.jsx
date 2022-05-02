import "./CssComponents/WasteTable.css";
import PropTypes from "prop-types";

function WasteTable({ object }) {
  return (
    <div className="wasteTable">
      <td>{object}</td>
    </div>
  );
}

WasteTable.propTypes = {
  object: PropTypes.shape({
    reponse1: PropTypes.string,
    description: PropTypes.string,
    conseil_zero_dechet: PropTypes.string,
  }),
};

WasteTable.defaultProps = {
  object: PropTypes.shape({
    reponse1: "object",
    description: "le nom de l'object",
    conseil_zero_dechet: "conseil zero dechet",
  }),
};

export default WasteTable;
