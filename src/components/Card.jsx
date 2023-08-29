const Card = (props) => {

  return (
    <li>
      { props.cover }
      { props.title }
      { props.location }
      { props.description }
      { props.children}
    </li>
  )
}

export default Card;