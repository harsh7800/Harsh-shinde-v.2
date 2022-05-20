/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'

const NavBar = () => {
      return (
        <>
          <ul className="navbar-container" data-aos="fade-up">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact-me">Contact me</a>
            </li>
          </ul>
        </>
      );
}

export default NavBar