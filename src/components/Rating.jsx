import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rating = (props) => { 
    const mapStars = [];

    for(let i = 0; i < 5; i++){
        mapStars[i] = <FontAwesomeIcon icon={faStar} key={i} className={i < props.rating ? "fa-active" : "fa-inactive"} />
    }

    // const mapStars = arrayStars.map((star, index) => (    
    //     <FontAwesomeIcon icon={faStar} className="fa-active" />       
    //     // <svg key={index}
    //     //      className="stars"
    //     //      fill={ index < data.rating ? "#FF6060" : "#E3E3E3" } >
    //     //     {star.path}    
    //     // </svg>
    //     ))
        
    return (        
        <div className="divStars">
            { mapStars }
        </div>
    )
}
  
export default Rating;