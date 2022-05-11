import React from "react";
import PropTypes from "prop-types";
import "./CssComponents/WasteTable.css";
import tipAmpoule from "../assets/idea.png";

function More({ object }) {
  if (object === "") {
    return <div className="wasteTable" />;
  }
  return (
    <div className="wasteTable">
      <img src={tipAmpoule} alt="conseil recyclage" />
    </div>
  );
}

More.propTypes = {
  object: PropTypes.string,
};

More.defaultProps = {
  object: "",
};
export default More;
