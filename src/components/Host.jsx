const Host = (props) => {  
    return (
      <figure key={ props.id }
            className="host">
        <img className="host-picture" src={ props.picture } alt={ props.name }></img>
        <figcaption className="host-figcaption">{ props.name }</figcaption>
      </figure>
    )
  }
  
  export default Host;