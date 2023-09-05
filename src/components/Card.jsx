const Card = (props) => {  
  return (
    <article 
          key={ props.id }
          className="card card--logement" 
          style= {{ backgroundImage:`url(${ props.cover })`}}
          >
      <div className="card__cover">{ props.cover }</div>
      <div className="card__title">{ props.title }</div>
      <div>{ props.location }</div>
      <div>{ props.description }</div>     
      <div>{ props.children}</div>
    </article>
  )
}

export default Card;