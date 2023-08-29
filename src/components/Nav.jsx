import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/Apropos">A Propos</NavLink>
        </nav>
    )
}

export default Nav;