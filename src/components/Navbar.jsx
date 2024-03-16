import { NavLink } from "react-router-dom";
import BurgerMenu from "./svg/BurgerMenu";
import "../assets/styles/navbar.css";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';


export default function NavBar({ anchorRefs }) {

  const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };
  const [activeLinks, setActiveLinks] = useState({});

  
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const handleScroll = () => {
      const newActiveLinks = {};

      Object.entries(anchorRefs).forEach(([key, ref]) => {
        if (elementIsVisibleInViewport(ref.current)) {
          newActiveLinks[key] = true;
        } else {
          newActiveLinks[key] = false;
        }
      });
      setActiveLinks(newActiveLinks);



      navLinks.forEach(navLink => {
        Object.entries(newActiveLinks).find(([key, value]) => {
          
        });

         
        }
      });


      Object.entries(newActiveLinks).forEach(([key, value]) => {
        console.log(navLinks)
        navLinks.forEach(navLink => {
          if (value) {
            console.log('coucou');
            navLink.classList.add('section-title');
          } else {
            navLink.classList.remove('section-title');
          }
        });

      });
    };

    document.addEventListener('scroll', handleScroll);
  }, [anchorRefs]);

  function openMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }
  return (
    <div className="navigation flex align-center">
      <BurgerMenu onClick={openMenu} />

      <ul className="menu">
        <li>
          <NavLink to="/" className={nav => nav.isActive ? " nav-link section-title" : "nav-link"}>
            Home
          </NavLink>
        </li>
        <li>
          <a href="#about" className="nav-link">About</a>
        </li>
        <li>
          <NavLink to="/blog" className={nav => nav.isActive ? " nav-link section-title" : "nav-link"}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/roadmap" className={nav => nav.isActive ? " nav-link section-title" : "nav-link"}>
            Roadmap
          </NavLink>
        </li>
        <li>
          <a href="#team" className="nav-link">Team</a>
        </li>
        <li>
          <a href="#rarity" className="nav)link">Rarity</a>
        </li>
        <li>
          <a href="#contact" className="nav)link">Contact</a>
        </li>
      </ul>
    </div>
  )
}

NavBar.propTypes = {
  anchorRefs: PropTypes.object.isRequired
}