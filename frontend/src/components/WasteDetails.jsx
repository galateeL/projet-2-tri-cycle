import PropTypes from "prop-types";

function WasteDetails({ nomImage, description, matiere, reponse1, conseil }) {
  return (
    <div>
      <div className="wasteImgContainer">{nomImage}</div>
      <h1 className="wasteName">{description}</h1>
      <h2 className="matiereTitle">Matière</h2>
      <div className="matiere">{matiere}</div>
      <h2 className="disposeOfWasteTitle">Où le jeter/recycler ?</h2>
      <div className="disposeOfWaste">{reponse1}</div>
      <h2 className="tipWasteTitle">Conseil zéro déchet</h2>
      <div className="tipWaste">{conseil}</div>
    </div>
  );
}

WasteDetails.propTypes = {
  description: PropTypes.string,
  matiere: PropTypes.string,
  reponse1: PropTypes.string,
  conseil: PropTypes.string,
  nomImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
  }),
};

WasteDetails.defaultProps = {
  description: "",
  matiere: "",
  reponse1: "",
  conseil: "",
  nomImage: {
    src: "",
    alt: "",
    className: "",
  },
};

export default WasteDetails;
