import Header from "../components/Header";
import Banner from '../components/Banner';
import Footer from "../components/Footer";
import AdList from "../components/AdList";

const Accueil = () => {
    return (
        <div className="home">
            <Header />
            <Banner title="Chez vous, partout et ailleurs">  
                <img src={require('../assets/Home-banner.jpg')} alt="banniere accueil"></img>
            </Banner>
            <AdList />
            {
                // Map sur les donées
                    // A chaque donnée, tu appelles le composant Card
            }
            <Footer />
        </div>
    )
}

export default Accueil;