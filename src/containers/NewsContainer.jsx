import HeroBanner from "../components/HeroBanner";

const NewsContainer = () => {
    let headerText = "The place for club updates and latest results"
    let imgURL = "RapidsTeam.jpg";
    return (  
        <div className="news">     
         <HeroBanner imgURL = {imgURL} headerText = {headerText} />
         </div> 
    );
}
 
export default NewsContainer;