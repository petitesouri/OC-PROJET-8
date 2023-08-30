import {Link} from "react-router-dom";
import useFetch from './useFetch'

import Card from './Card';

const AdList = (props) => {
  const datasJson = useFetch();
  console.log(datasJson)

  return (
    <Link to="/Logement">
      <ul className='ad-list-container'>
        {datasJson.map((card, id) => (  
          <Card key={id} title={card.title} cover={card.cover}/>
        ))}
      </ul>
    </Link>   
  ) 
}

export default AdList;