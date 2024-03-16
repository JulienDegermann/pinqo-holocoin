import PropTypes from 'prop-types'
import '../assets/styles/button.css'

export default function Button({ text, link, className, onClick }) {
  return (
    <button className={className} href={link} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  link: PropTypes.string,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
}