import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Logement = () => {
    // Tu récupères l'id dans l'url
    // Tu fais un fetch de ton json
    // Tu vérifie si tu trouves un logement qui correspond à cet ID
    // Si ce n'est pas le cas > Tu renvoies une erreur 404
    // Si tu trouves le logement > Tu affiches les infos
    
    return (
        <div>
            <Header />
            <Card />
            <Footer />            
        </div>
    )
}

export default Logement;