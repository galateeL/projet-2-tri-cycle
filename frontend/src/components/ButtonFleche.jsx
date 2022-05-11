import React from "react";
import flecheBas from "../assets/flecheBas1.png";

export default function ButtonFleche() {
  function directionBas() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      className="flecheButton"
      type="button"
      onClick={() => directionBas()}
    >
      <img
        className="flecheImg"
        src={flecheBas}
        alt="dechet"
        height="60"
        width="60"
      />
    </button>
  );
}
