import React from "react";
import flecheBas from "../assets/flecheBas1.png";

let sectionStyle = {
  backgroundImage: flecheBas,
};

export default function ButtonFleche() {
  function directionBas() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <button className="buttonImg">
      <img
        src={sectionStyle.backgroundImage}
        className="flecheBas"
        onClick={() => directionBas()}
      />
    </button>
  );
}
