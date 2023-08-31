import {Link, NavLink} from "react-router-dom";
import logo from '../assets/LOGO.jpg';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <nav className="nav">
                <NavLink to="/">Accueil</NavLink>                
                <NavLink to="/Apropos">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header;