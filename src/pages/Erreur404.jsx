import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Erreur = () => {
    return (
        <div className="erreur404">
            <Header />
            <section>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">
                    Retourner sur la page d'accueil
                </Link>
            </section>
            <Footer />            
        </div>
    )
}

export default Erreur;