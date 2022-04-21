
import Header from "@components/Header";
import ButtonQuizz from "@components/ButtonQuizz";
import ButtonSearch from "@components/ButtonSearch";
import ButtonFleche from "@components/ButtonFleche";
import logo from '../assets/logo-ss-fond.png';
import fleche from '../assets/flecheBas1.png';
import styleHome from '../Home.css';
import trioPoubelles from '@assets/recycling-color.png';


export default function Home() {
  

  return (
    <div>
      <div>
        <nav>
          <Header />
        </nav>
      </div>
      <div >
        <img className="logoImage" src={logo}alt="LOGO"></img>
      </div>
      <div>
        <h1 className= "logoTitre">Tri'cycle</h1>
        <p>
        
            consectetur adipiscing elit. In ultrices lectus ac condimentum
          elementum. Nullam nec faucibus libero. Pellentesque ut eros lectus.
          Nullam ultrices felis eu pellentesque tempus. Pellentesque a sapien
          enim. Etiam ac lectus quis orci gravida rhoncus. Nulla at pretium
          turpis. Vestibulum molestie at lacus sit amet congue. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
      </div>
      <div  >
        <ButtonFleche />
      </div>
      <div>
        <h1>fais ton choix!</h1>
        <img src={trioPoubelles} alt="trioPoubelles"></img>
      </div>
      <div>
        <ButtonQuizz />
        <h2></h2>
        <p className="pQ"> loremipsum ecolopsum birdhitchcock campagnum etangum di fleurum verdum parcum pum.</p>
      </div>
      <div>
        <ButtonSearch />
        <h2></h2>
        <p className="pS"> loremipsum ecolopsum birdhitchcock campagnum etangum di fleurum verdum parcum pum.</p>
      </div>
    </div>
  );
}
