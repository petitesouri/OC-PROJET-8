const Card = (props) => {  
  return (
    <article 
          key={ props.id }
          className="card card--logement" 
          style= {{ backgroundImage:`url(${ props.cover })`}}
          >
      <div className="card__cover">{ props.cover }</div>
      <h2 className="card__title">{ props.title }</h2>
      <p className="card__text">{ props.location }</p>
      <p className="card__text">{ props.description }</p>     
      <div>{ props.children}</div>
    </article>
  )
}

export default Card;