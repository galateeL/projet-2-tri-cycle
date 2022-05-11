import React from "react";
import PropTypes from "prop-types";
import "./CssComponents/WasteTable.css";
import decheterie from "../assets/bennes-decheterie.png";
import colonneVerre from "../assets/glass-container.png";
import ordureMenagere from "../assets/rubbish-bag.png";
import yellowContainer from "../assets/yellow-container.png";
import otherWaste from "../assets/other-waste-icon.png";

function Amount({ object }) {
  function getdechet() {
    if (object === "En déchèterie ou écopoint") {
      return <img src={decheterie} alt="decheterie" />;
    }
    if (object === "En colonne à verre") {
      return <img src={colonneVerre} alt="colonne verre" />;
    }
    if (object === "Dans le sac d’ordures ménagères") {
      return <img src={ordureMenagere} alt="sac ordure menagere" />;
    }
    if (object === "Dans le sac ou bac jaune") {
      return (
        <img
          id="yellow-container"
          src={yellowContainer}
          alt="container jaune"
        />
      );
    }
    return <img src={otherWaste} alt="autre dechet" />;
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
