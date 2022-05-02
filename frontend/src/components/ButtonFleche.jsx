import React from "react";

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
        classeName="flecheImg"
        src="/src/assets/flecheBas1.png"
        alt="dechet"
        height="60"
        width="60"
      />
    </button>
  );
}
