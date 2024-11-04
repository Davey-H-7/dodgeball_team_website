import RapidsLogo from '../assets/RapidsLogo.jpg'
import { Link } from 'react-router-dom'





export default function Header(){
    return(
        <div className="header">
            <div className='title'>
            <img className="logo" src = {RapidsLogo}/>
            <h1>Kelvin Rapids Dodgeball Club</h1>
            </div>
            <ul className="links">
                <Link to="/about">About</Link>
                <Link to="/team">Meet the Team</Link>
                <Link to="/News">Club News</Link>
                <Link to="/find">Find Us</Link>
                <Link to="/contact">Contact</Link>
            </ul>
    </div>
    )
}