import React from "react";
import PropTypes from "prop-types";
import "./CssComponents/WasteTable.css";

function Amount({ object }) {
  function getdechet() {
    if (object === "En déchèterie ou écopoint") {
      return <img src="/src/assets/bennes-decheterie.png" alt="decheterie" />;
    }
    if (object === "En colonne à verre") {
      return <img src="/src/assets/glass-container.png" alt="hello" />;
    }
    if (object === "Dans le sac d’ordures ménagères") {
      return <img src="/src/assets/rubbish-bag.png" alt="hello" />;
    }
    if (object === "Dans le sac ou bac jaune") {
      return (
        <img
          id="yellow-container"
          src="/src/assets/yellow-container.png"
          alt="hello"
        />
      );
    }
    return <img src="/src/assets/other-waste-icon.png" alt="hello" />;
  }

  return <div className="wasteTable">{getdechet()}</div>;
}

Amount.propTypes = {
  object: PropTypes.string,
};

Amount.defaultProps = {
  object: "",
};

export default Amount;
