import HeroBanner from "../components/HeroBanner";
export default function AboutContainer(){

    let headerText = "Find out about our club and history"
    let imgURL = "RapidsTeam.jpg";

    return(
        <div className="about">
           <HeroBanner imgURL = {imgURL} headerText = {headerText} />
            <div className="mainText">
                <p>Kelvin Rapids is Glasgow's first(and currently only!) official dodgeball team registered with British Dodgeball. 
                    We train every week at Kelvinhall in the west of the city, welcoming players of all ability and fitness levels. We also regularly participate in competitions, whether that be friendly games, official Scottish Leagues or charity tournaments with the other teams around Scotland and further afield. If you're looking for a new sport to play for socialising, just for fun or are keen to get involved in the competitive side, there's a space for you with our club.
                </p>
            </div>
        </div>
    )
};