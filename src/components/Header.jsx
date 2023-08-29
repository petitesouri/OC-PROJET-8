import {Link} from "react-router-dom";
import logo from '../assets/LOGO.jpg';

import Nav from './Nav';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <Nav/>
        </header>
    )
}

export default Header;