const Tags = (props) => {  
    return (
      <li 
            key={ props.id }
            className="tags"
            >
        <div>{ props.tags }</div>
      </li>
    )
  }
  
  export default Tags;