import HeroBanner from "../components/HeroBanner";
import AboutText from "../components/AboutText";
export default function AboutContainer(){

    let headerText = "Find out about our club and history"
    let imgURL = "RapidsTeam.jpg";

    return(
        <div className="about">
           <HeroBanner imgURL = {imgURL} headerText = {headerText} />
           <AboutText/>
        </div>
    )
};