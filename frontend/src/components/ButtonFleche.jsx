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
    <div>
      <button
        className="buttonFleche"
        type="button"
        onClick={() => directionBas()}
      >
        bouton
      </button>
    </div>
  );
}
