import HomeBanner from '../components/HomeBanner'

export default function HomeContainer(){

    let imgURL = 'RapidsTeam.jpg';

    return(
        <div className="home">

            <HomeBanner imgURL = {imgURL}/>

        </div>
    )
};