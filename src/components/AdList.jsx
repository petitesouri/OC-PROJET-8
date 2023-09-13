import {Link} from "react-router-dom";
import useFetch from '../components/useFetch'

import Card from './Card';

const AdList = (props) => {
  const datasJson = useFetch();

  return (
    <ul className='ad-list-container'>
      {datasJson.map((card) => ( 
        <div key={card.id} className="ad-list-item">
          <Link to={`/Logement/${card.id}`}  className="item">
            <Card id={card.id} title={card.title} cover={card.cover}/>
          </Link>
        </div>
      ))}
    </ul>
  )
}

export default AdList;