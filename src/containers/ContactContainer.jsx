import HeroBanner from "../components/HeroBanner";

const ContactContainer = () => {
    let headerText = "Get in Touch"
    let imgURL = "RapidsTeam.jpg";

    return ( 
        <HeroBanner imgURL = {imgURL} headerText = {headerText} />
     );
}
 
export default ContactContainer;