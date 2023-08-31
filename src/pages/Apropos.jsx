import Header from "../components/Header";
import Banner from '../components/Banner';
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

const APropos = () => {
    return (
        <div className="page">
            <Header />
            <main className="about">
                <Banner>
                    <img src={require('../assets/APropos-banner.png')} alt="banniere accueil"></img> 
                </Banner>
                <section className="collapse-list">
                    <Collapse 
                        title="Fiabilité"
                        paragraph="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                                Les photos sont conformes aux logements, 
                                et toutes les informations sont régulièrement vérifiées par nos équipes."
                    />
                    <Collapse 
                        title="Respect"
                        paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme."
                    />
                    <Collapse 
                        title="Service"
                        paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme."
                    />
                    <Collapse 
                        title="Sécurité"
                        paragraph="La sécurité est la priorité de Kasa. 
                        Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </section>
            </main>
            <Footer />   
        </div>
    )
}

export default APropos;