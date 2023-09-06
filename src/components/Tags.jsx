const Tags = (props) => {  
    return (
      <ul key={ props.id } className="tags">
        <li className="tags-item">{ props.tags }</li>
      </ul>
    )
  }
  
  export default Tags;