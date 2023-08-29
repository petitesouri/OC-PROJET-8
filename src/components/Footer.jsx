import Logo from '../assets/LOGO-black.png'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={ Logo } alt="logo" className="logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;