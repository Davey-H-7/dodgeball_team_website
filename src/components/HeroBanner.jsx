
import '../styling/HomeBanner.css'

const HeroBanner = (imgURL, headerText) => {
    console.log('../assets/' + imgURL.imgURL)
    return (
        <div className="heroBanner">
              <img src = {imgURL}/>
              <div className="overlay">
                <h2> {headerText}</h2>
                <button onClick={()=>window.location="/about"}> Find out More </button>
              </div>
        </div>
     );
}
 
export default HeroBanner;