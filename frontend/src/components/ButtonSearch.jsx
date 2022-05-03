import { Link } from "react-router-dom";
import styleButton from "../assets/searchImg.png";

export default function ButtonSearch() {
  const sectionStyle = {
    backgroundImage: styleButton,
  };

  function openSearch() {}

  return (
    <div>
      <Link to="/Research">
        <button className="buttonImg" type="button">
          <img
            src={sectionStyle.backgroundImage}
            className="imgButton"
            onClick={() => directionBas()}
          />
        </button>
      </Link>
    </div>
  );
}
