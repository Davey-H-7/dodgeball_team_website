import { redirect } from 'react-router-dom';
import TeamPhoto from '../assets/RapidsTeam.jpg'
import '../styling/HeroBanner.css'

const HeroBanner = (imgURL) => {
    console.log('../assets/' + imgURL.imgURL)
    return ( 
        <div className="heroBanner">
              <img src = {TeamPhoto}/>
              <div className="overlay">
                <h2> Feeling Rapid yet?</h2>
                <button onClick={()=>window.location="/about"}> Find out More </button>
              </div>
        </div>
     );
}
 
export default HeroBanner;