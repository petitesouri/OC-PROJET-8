import { Link } from "react-router-dom";

const Erreur = () => {
    return (
            <main className="page erreur404">
                <section className="erreur404__section">
                    <h2>404</h2>
                    <div>
                        {window.innerWidth < 820 ? (
                            <p className="erreur404__text">Oups! La page que < br/>vous demandez n'existe pas.</p>
                            ):(
                            <p className="erreur404__text">Oups! La page que vous demandez n'existe pas.</p>
                            )} 
                    </div>                                                             
                    <Link to="/">
                        Retourner sur la page d'accueil
                    </Link>
                </section>
            </main>           
    )
}

export default Erreur;