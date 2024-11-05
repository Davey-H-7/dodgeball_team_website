import TeamPhoto from '../assets/RapidsTeam.jpg'
import '../styling/HeroBanner.css'

const HeroBanner = (imgURL) => {
    console.log('../assets/' + imgURL.imgURL)
    return ( 
        <div className="heroBanner">
              <img src = {TeamPhoto}/>
              <h2> Feeling Rapid yet?</h2>
        </div>
     );
}
 
export default HeroBanner;