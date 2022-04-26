// import React from "react";
// import flecheBas from "../assets/flecheBas1.png";

// const sectionStyle = {
//   backgroundImage: flecheBas,
// };

// export default function ButtonFleche() {
//   function directionBas() {
//     window.scroll({
//       top: document.body.offsetHeight,
//       left: 0,
//       behavior: "smooth",
//     });
//   }

//   return (
//     <button className="buttonImg">
//       <img
//         src={sectionStyle.backgroundImage}
//         className="flecheBas"
//         onClick={() => directionBas()}
//       />
//     </button>
//   );
// }

import { Link } from "react-router-dom";
import "./CssComponents/ButtonQuizz.css";

export default function ButtonQuizz() {
  return (
    <div>
      <Link to="/">
        <button className="buttonQuiz" type="button">
          bouton
        </button>
      </Link>
    </div>
  );
}
