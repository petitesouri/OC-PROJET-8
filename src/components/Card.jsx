const Card = (props) => {
  return (
    console.log(props),
    <li>
         { props.title }
         { props.children }
    </li>
  )
}

export default Card;