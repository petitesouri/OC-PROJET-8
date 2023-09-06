const Host = (props) => {  
    return (
      <div key={ props.id }
            className="host card__text" 
            style= {
                { backgroundImage:`url(${ props.picture })`}} >
        <div>{ props.name }</div>
        <div className="host-picture">{ props.picture }</div>
      </div>
    )
  }
  
  export default Host;