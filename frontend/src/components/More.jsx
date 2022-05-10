import React from "react";
import PropTypes from "prop-types";
import "./CssComponents/WasteTable.css";

function More({ object }) {
  if (object === "") {
    return <div className="wasteTable" />;
  }
  return (
    <div className="wasteTable">
      <img src="/src/assets/idea.png" alt="helloodd" />
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
