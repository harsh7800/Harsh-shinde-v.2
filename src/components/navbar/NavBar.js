/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState } from 'react'
import './Navbar.css'
import './Menubtn.css'
import { Link } from 'react-scroll';
// import Title from '../header/Title';

const NavBar = () => {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 700) {
      setScroll(true);
      console.log("working");
    } else {
      setScroll(false);
    }
  });
      return (
        <>
          <div className={scroll ? "navbar-container bg" : "navbar-container"}>
            <li>
              <Link exact to="Home" smooth={true} duration={400}>
                Home
              </Link>
            </li>

            <li>
              <Link exact to="About-me" smooth={true} duration={600}>
                About me
              </Link>
            </li>

            <li>
              <Link exact to="Projects" smooth={true} duration={800}>
                Projects
              </Link>
            </li>

            <li>
              <Link exact to="Contact-me" smooth={true} duration={1000}>
                Contact me
              </Link>
            </li>
          </div>
        </>
      );
}

export default NavBar