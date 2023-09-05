const Host = (props) => {  
    return (
      <div 
            key={ props.id }
            className="host" 
            style= {
                { backgroundImage:`url(${ props.picture })`}}
            >
        <div>{ props.name }</div>
        <div>{ props.picture }</div>
      </div>
    )
  }
  
  export default Host;