import HeroBanner from "../components/HeroBanner";

const TeamContainer = () => {
    let headerText = "Meet the faces behind the club"
    let imgURL = "RapidsTeam.jpg";

    return ( 
        <HeroBanner imgURL = {imgURL} headerText = {headerText} />
     );
}
 
export default TeamContainer;