import "./CssComponents/WasteTable.css";
import PropTypes from "prop-types";

function WasteTable({ object }) {
  return (
    <div className="wasteTable">
      <p className="description">{object}</p>
    </div>
  );
}

WasteTable.propTypes = {
  object: PropTypes.string,
};

WasteTable.defaultProps = {
  object: "",
};

export default WasteTable;
