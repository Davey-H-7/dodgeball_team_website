import HeroBanner from '../components/HeroBanner'

export default function HomeContainer(){

    let imgURL = 'RapidsTeam.jpg';

    return(
        <div className="home">

            <HeroBanner imgURL = {imgURL}/>

        </div>
    )
};