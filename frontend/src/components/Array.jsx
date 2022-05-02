import "./CssComponents/WasteTable.css";
import PropTypes from "prop-types";

function Array({ object }) {
  return (
    <div className="Array">
      <p>{object.description}</p>
    </div>
  );
}
Array.propTypes = {
  // eslint-disable-next-line react/require-default-props
  object: PropTypes.string,
};
// Array.defaultProps = {
//   description: "no description",
// };

export default Array;
