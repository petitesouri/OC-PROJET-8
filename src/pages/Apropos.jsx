import Header from "../components/Header";
import Banner from '../components/Banner';
import Footer from "../components/Footer";

const APropos = () => {
    return (
        <div className="about">
            <Header />
            <Banner>
                <img src={require('../assets/APropos-banner.png')} alt="banniere accueil"></img> 
            </Banner>             
            <Footer />   
        </div>
    )
}

export default APropos;