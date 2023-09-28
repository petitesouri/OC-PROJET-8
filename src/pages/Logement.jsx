import { useParams } from "react-router-dom";
import useFetch from '../components/useFetch';

import Card from "../components/Card";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Erreur from "./Erreur404";

const Logement = () => {
    const { id } = useParams();
    const data = useFetch().find ( cardById => cardById.id === id );

    return (   
        <main className="page logement">
            <section className="logement-section" key={id} >
                {data ? 
                    <article className="logement-item">
                        <Slideshow 
                            data={data.pictures} />
                        <div className="informations">
                            <div className="informations__logement">
                                <Card 
                                    title={data.title} 
                                    location={data.location} /> 
                                <Tags tags={data.tags} />                            
                            </div>
                            <div className="informations__host">
                                <Host 
                                    name={data.host.name}
                                    picture={data.host.picture} />
                                <Rating 
                                    rating={data.rating}/>                          
                            </div>
                        </div> 
                        <div className="informations__description">
                            <Collapse title="Description">
                                {data.description}
                            </Collapse>
                            <Collapse title="Equipements"
                                    equipments= {data.equipments} >
                                <ul>
                                    {data.equipments.map(equipment => (
                                        <li key={equipment}>{equipment}</li>
                                    ))}
                                </ul>
                            </Collapse>
                        </div>                                           
                    </article> 
                : <Erreur /> }
            </section>
        </main>
    )   
}

export default Logement;