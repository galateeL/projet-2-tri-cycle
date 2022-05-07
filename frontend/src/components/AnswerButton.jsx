import React from "react";
import { PropTypes } from "prop-types";

function AnswerButton({ id, onClick, value }) {
  return (
    <div>
      <button
        id={id}
        type="submit"
        className="openModalBtn"
        value={value}
        onClick={onClick}
      >
        <p />
      </button>
    </div>
  );
}

AnswerButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

AnswerButton.defaultProps = {
  id: PropTypes.string,
  onClick: () => {},
  value: "En déchèterie ou écopoint",
};
export default AnswerButton;
