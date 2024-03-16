import Navbar from './Navbar'
import Logo from './svg/Logo'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Header({ anchorRefs }) {
  return (
    <header id="header" className="flex">
      <div className="container">
        <div className="flex">
          <NavLink to="#top" className="logo-name">
            <Logo />
            <h1>holocoin</h1>

          </NavLink>
          {/* <div className="logo-name">
      </div> */}
          <Navbar anchorRefs={ anchorRefs }/>
          <Button
            text="Buy HoloCoin"
            className="CTA button"
          />
        </div>
      </div>


    </header>
  )
}

Header.propTypes = {
  anchorRefs: PropTypes.object.isRequired
}