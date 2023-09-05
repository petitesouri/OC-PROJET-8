import { Link } from "react-router-dom";

const Erreur = () => {
    return (
            <main className="page erreur404">
                <section className="erreur404__section">
                    <h2>404</h2>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/">
                        Retourner sur la page d'accueil
                    </Link>
                </section>
            </main>           
    )
}

export default Erreur;