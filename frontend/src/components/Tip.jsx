import React from "react";
import PropTypes from "prop-types";
import tipAmpoule from "../assets/idea.png";

function Tip({ tip }) {
  return (
    <div className="tip">
      <img src={tipAmpoule} alt="tip" className="tipImg" />
      <p className="tipDetail">{tip}</p>
    </div>
  );
}

Tip.propTypes = {
  tip: PropTypes.string,
};

Tip.defaultProps = {
  tip: "Recycling tip",
};

export default Tip;
