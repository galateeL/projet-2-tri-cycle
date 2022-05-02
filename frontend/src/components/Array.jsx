import "./CssComponents/Array.css";
import PropTypes from "prop-types";

function Array({ object }) {
  const reponse1 = object.reponse1 === "En déchèterie ou écopoint";
  const reponse2 = object.reponse1 === "Dans le sac d’ordures ménagères";
  const reponse3 = object.reponse1 === "En colonne à verre";
  const reponse4 =
    object.reponse1 ===
    "Retour gratuit dans un magasin qui vend ce type de produit";
  const reponse6 = object.reponse1 === "Dans le sac ou bac jaune";
  const reponse7 = object.reponse1 === "Dans un composteur ou lombricomposteur";
  const reponse8 = object.reponse1 === "Dans une borne textile";
  const reponse9 = object.reponse1 === "Retour en pharmacie";
  const reponse10 = object.reponse1 === "En ressourcerie";
  const reponse11 =
    object.reponse1 ===
    "Retour gratuit dans un magasin qui vend ce type de produit ou dans les garages";
  const reponse13 =
    object.reponse1 ===
    "Dans les points de dépôt dédiés installés en magasins (grandes surfaces, etc.)";
  const handleClick = (e) => window.open(e);
  return (
    <div
      className="Array"
      onClick={handleClick}
      onKeyUp={handleClick}
      role="button"
      tabIndex="0"
    >
      <p className="description">{object.description}</p>
      {reponse1 ? (
        <img
          className="picturesWaste"
          src="../src/assets/bennes-decheterie.png"
          alt="bennes decheterie"
        />
      ) : null}
      {reponse2 ? (
        <img
          className="picturesWaste"
          src="../src/assets/rubbish-bag.png"
          alt="rubbish"
        />
      ) : null}
      {reponse3 ? (
        <img
          className="picturesWaste"
          src="../src/assets/glass-container.png"
          alt="glass container"
        />
      ) : null}
      {reponse4 ? (
        <img
          className="picturesWaste"
          src="../src/assets/other-waste-icon.png"
          alt="other wath icon"
        />
      ) : null}
      {reponse6 ? (
        <img
          id="backjaune"
          className="picturesWaste"
          src="../src/assets/yellow-container.png"
          alt="yellow container"
        />
      ) : null}
      {reponse7 ? (
        <img
          className="picturesWaste"
          src="../src/assets/other-waste-icon.png"
          alt="other-waste-icon"
        />
      ) : null}
      {reponse8 ? (
        <img
          className="picturesWaste"
          src="../src/assets/other-waste-icon.png"
          alt="other-waste-icon"
        />
      ) : null}
      {reponse9 ? (
        <img
          className="picturesWaste"
          src="../src/assets/other-waste-icon.png"
          alt="other-waste-icon"
        />
      ) : null}
      {reponse10 ? (
        <img
          className="picturesWaste"
          src="../src/assets/other-waste-icon.png"
          alt="other-waste-icon"
        />
      ) : null}
      {reponse11 ? (
        <img
          className="picturesWaste"
          src="../src/assets/other-waste-icon.png"
          alt="other-waste-icon"
        />
      ) : null}
      {reponse13 ? (
        <img
          className="picturesWaste"
          src="../src/assets/other-waste-icon.png"
          alt="other-waste-icon"
        />
      ) : null}

      {object.conseil_zero_dechet ? (
        <img
          className="picturesWaste"
          src="../src/assets/idea.png"
          alt="idea"
        />
      ) : (
        <div className="emptyObject" />
      )}
    </div>
  );
}

Array.propTypes = {
  object: PropTypes.shape({
    reponse1: PropTypes.string,
    description: PropTypes.string,
    conseil_zero_dechet: PropTypes.string,
  }),
};

Array.defaultProps = {
  object: PropTypes.shape({
    reponse1: "object",
    description: "le nom de l'object",
    conseil_zero_dechet: "conseil zero dechet",
  }),
};

export default Array;
