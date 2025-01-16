import RapidsLogo from '../assets/RapidsLogo.jpg'
import InstagramLogo from '../assets/instagram.png'
import FacebookLogo from '../assets/facebook.png'
import { Link } from 'react-router-dom'
import '../styling/Header.css'




export default function Header(){
    return(
        <div className="header">
            <div className='logoTitleSocials'>
                <div className='logoTitle'>
                    <a href ="/"><img className="logo" src = {RapidsLogo}/></a>
                    <h1>Kelvin Rapids Dodgeball Club</h1>
                </div>
                <div className="socialLinks">
                    <a href = "https://www.instagram.com/kelvinrapids/" ><img className='socialLogo' src = {InstagramLogo}/></a>
                    <a href = "https://www.facebook.com/search/top?q=kelvin%20rapids%20dodgeball%20club" ><img className='socialLogo' src = {FacebookLogo}/></a>
                </div>
            </div>
            <ul className="links">
                <Link to="/about">About</Link>
                <Link to="/News">Club News</Link>
                <Link to="/find">Find Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/gallery">Gallery</Link>

            </ul>
    </div>
    )
}