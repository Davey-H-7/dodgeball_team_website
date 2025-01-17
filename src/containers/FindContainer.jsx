import HeroBanner from "../components/HeroBanner";

const FindContainer = () => {
    let headerText = "Where to find us. Come along!"
    let imgURL = "RapidsTeam.jpg";

    return (         
    <div className="findUs">
        <HeroBanner imgURL = {imgURL} headerText = {headerText} />

     </div> );
}
 
export default FindContainer;