import React from "react";
import PropTypes from "prop-types";
import "./CssComponents/WasteTable.css";

function More({ object }) {
  if (typeof object === "string") {
    return (
      <div className="wasteTable">
        <img src="/src/assets/idea.png" alt="helloodd" />
      </div>
    );
  }
  return <div className="wasteTable" />;
}

More.propTypes = {
  object: PropTypes.shape({
    reponse1: PropTypes.string,
    description: PropTypes.string,
    conseil_zero_dechet: PropTypes.string,
  }),
};

More.defaultProps = {
  object: PropTypes.shape({
    reponse1: "object",
    description: "le nom de l'object",
    conseil_zero_dechet: "conseil zero dechet",
  }),
};
export default More;
