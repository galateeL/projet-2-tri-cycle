import { Link } from "react-router-dom";
import styleButton from '../assets/quizzImg.png';

export default function ButtonQuizz() {

    let sectionStyle = {
        backgroundImage: styleButton
    };
    
    return (
    <div>
        <Link to="../Quizz" > 
            <button className="buttonImg" type="button" >
                <img src={sectionStyle.backgroundImage} className="imgButton" />
            </button>    
        </Link>
    </div>
  );
li}
