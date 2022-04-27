import Header from "@components/Header";
import ButtonQuizz from "@components/ButtonQuizz";
import ButtonSearch from "@components/ButtonSearch";
import ButtonFleche from "@components/ButtonFleche";
import trioPoubelles from "@assets/recycling-color.png";
import logo from "../assets/logo-ss-fond.png";

export default function Home() {
  return (
    <div>
      <div>
        <nav>
          <Header />
        </nav>
      </div>
      <div className="logoTitre">
        <img className="logoImage" src={logo} alt="LOGO" />
        <h1 className="triTitre">Tri&cycle</h1>
      </div>
      <div>
        <p className="presentation">
          Sous le solum, chantum li zoisum di loremipsum ecolopsum.
          Birdhitchcock campagnum etangum di fleurum verdum parcum pum.
          Maitrumcorbum sur un arbrum perchum, lum tin api pre ce langagum. que
          vum etum jolim que vou etum bo. Si votrum ramagum se rapelum a votrum
          plumagum voum zetum etum le fenixum de se boim.loremipsum ecolopsum
          birdhitchcock campagnum etangum di fleurum verdum parcum pum.
          Maitrumcorbum sur un arbrum perchum, lum tin api pre ce langagum. que
          vum etum jolim que vou etum bo.
        </p>
      </div>
      <div className="buttonFleche">
        <ButtonFleche />
      </div>
      <div className="triopoubelles">
        <h1>fais ton choix!</h1>
        <img src={trioPoubelles} alt="trioPoubelles" />
      </div>
      <div className="buttonQuizz">
        <ButtonQuizz />

        <p className="pQ">
          loremipsum ecolopsum birdhitchcock campagnum etangum di fleurum verdum
          parcum pum. Maitrumcorbum sur un arbrum perchum, lum tin api pre ce
          langagum. que vum etum jolim que vou etum bo. Si votrum ramagum se
          rapelum a votrum plumagum voum zetum etum le fenixum de se boim.
        </p>
      </div>
      <div className="buttonSearch">
        <ButtonSearch />

        <p className="pS">
          {" "}
          loremipsum ecolopsum birdhitchcock campagnum etangum di fleurum verdum
          parcum pum.loremipsum ecolopsum birdhitchcock campagnum etangum di
          fleurum verdum parcum pum. Maitrumcorbum sur un arbrum perchum, lum
          tin api pre ce langagum. que vum etum jolim que vou etum bo. Si votrum
          ramagum se rapelum a votrum plumagum voum zetum etum le fenixum de se
          boim.
        </p>
      </div>
    </div>
  );
}
