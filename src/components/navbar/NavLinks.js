/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
      return (
        <>
          <div
            className={
              showMenu ? "navbar-container active" : "navbar-container"
            }
          >
            <li>
              <Link
                className="navlinks"
                exact
                to="Home"
                smooth={true}
                duration={400}
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="navlinks"
                exact
                to="About-me"
                smooth={true}
                duration={600}
                onClick={() => setShowMenu(false)}
              >
                About me
              </Link>
            </li>

            <li>
              <Link
                className="navlinks"
                exact
                to="Projects"
                smooth={true}
                duration={800}
                onClick={() => setShowMenu(false)}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                className="navlinks"
                exact
                to="Contact-me"
                smooth={true}
                duration={1000}
                onClick={() => setShowMenu(false)}
              >
                Contact me
              </Link>
            </li>
          </div>
          <span>
            <button
              className="menu"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <i className="fa-solid fa-times"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          </span>
        </>
      );
}

export default NavBar