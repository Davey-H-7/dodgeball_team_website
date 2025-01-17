/* eslint-disable react/prop-types */
import '../styling/HeroBanner.css'

const HeroBanner = ({imgURL, headerText}) => {
    
    console.log('/' + imgURL)
    console.log(headerText)

    let heroURL = '/' + imgURL


    return (
        <div className="heroBanner">
                <img src = {heroURL}/>
                <h2> {headerText}</h2>
              </div>
     );
}
 
export default HeroBanner;