import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Erreur = () => {
    return (
        <div className="page">
            <Header />
            <main className="erreur404">
                <section className="erreur404__section">
                    <h2>404</h2>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/">
                        Retourner sur la page d'accueil
                    </Link>
                </section>
            </main>
            <Footer />            
        </div>
    )
}

export default Erreur;