import { useParams } from "react-router-dom";
import useFetch from '../components/useFetch'

import Card from "../components/Card";
import Slideshow from "../components/Slideshow";
{/*import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";*/}

const Logement = () => {
    const { id } = useParams();
    const datasJson = useFetch();

    return (
        <main className="page logement">
            {datasJson.map ( (cardById) => (
                <section className="logement-section" key={cardById.id} >
                    {cardById.id === id ? 
                        <div className="logement-item">
                            <Slideshow 
                            data={cardById.pictures}
                            />
                            <Card 
                                title={cardById.title} 
                                location={cardById.location}                            
                                /> 
                            {/*<Tags tags={cardById.tags} />
                            <Host 
                                name={cardById.host.name}
                                picture={cardById.host.picture}
                                />
                            <Rating 
                                rating={cardById.rating}/>
                            <Collapse 
                                title="Description"
                                paragraph= {cardById.description}
                            />
                            <Collapse 
                                title="Equipements"
                                paragraph= {cardById.equipments}
                            />*/}
                        </div> : null
                    }
                </section>
            ))}
        </main>
    )
}

export default Logement;