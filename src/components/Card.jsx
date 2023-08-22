import PropTypes from 'prop-types'

function Card({ id, name, title }) {
  return (
    <div>
        <span>{id}</span>
        <span>{name}</span>
        <span>{title}</span>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
}

export default Card