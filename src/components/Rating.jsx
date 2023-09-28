import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rating = (props) => { 
    const mapStars = [];

    for(let i = 0; i < 5; i++){
        mapStars[i] = <FontAwesomeIcon icon={faStar} key={i} className={i < props.rating ? "fa-active" : "fa-inactive"} />
    }      
    return (        
        <div className="divStars">
            { mapStars }
        </div>
    )
}
  
export default Rating;