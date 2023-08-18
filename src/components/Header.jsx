import {Link} from "react-router-dom";

import Nav from './Nav';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img src={require('../assets/LOGO.jpg')} alt="logo" className="logo"/>
            </Link>
            <Nav/>
        </div>
    )
}

export default Header;