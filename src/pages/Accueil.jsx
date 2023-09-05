import Banner from '../components/Banner';
import AdList from "../components/AdList";

const Accueil = () => {
    return (
            <main className="page home">
                <Banner title="Chez vous, partout et ailleurs">  
                    <img src={require('../assets/Home-banner.jpg')} alt="banniere accueil"></img>
                </Banner>
                <AdList />
            </main>
    )
}

export default Accueil;