import Banner from '../components/Banner';
import AdList from "../components/AdList";

import HomeBanner from '../assets/Home-banner.jpg';

const Accueil = () => {
    return (
        <main className="page home">
            <Banner title="Chez vous, partout et ailleurs">  
                <img src={HomeBanner} alt="banniere accueil"></img>
            </Banner>
            <AdList />
        </main>
    )
}

export default Accueil;