import PropTypes from 'prop-types'
import '../assets/styles/card.css'

export default function Card({ title, description, image, link}) {
  return (
    <>
      <a href={link} className="card">
        <div className="image">

          <img className="card-image image-one" src={image} alt={title} />
          <img className="card-image image-two" src={image} alt={title} />
          <img className="card-image image-three" src={image} alt={title} />
          <img className="card-image image-four" src={image} alt={title} />
        </div>
        <div className="card-body">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </a>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}