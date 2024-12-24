import TeamPhoto from '../assets/RapidsTeam.jpg'
import '../styling/HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className="homeBanner">
              <img src = {TeamPhoto}/>
              <div className="overlay">
                <h2> Feeling Rapid yet?</h2>
                <button onClick={()=>window.location="/about"}> Find out More </button>
              </div>
        </div>
     );
}
 
export default HomeBanner;