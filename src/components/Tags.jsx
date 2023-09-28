const Tags = ({tags}) => {  
  
  return (
    <ul key={ tags.id } className="tags">
      {tags.map((tags, index) => (
        <li key={ tags[index] } className="tags-item">{ tags }</li>
      ))}    
    </ul>
  )
}
  
export default Tags;