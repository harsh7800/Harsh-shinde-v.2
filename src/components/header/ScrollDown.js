import React from 'react'
import './scrolldown.css'
import { Link } from 'react-scroll';

const ScrollDown = () => {
  return (
    <>
      <div className="scroll-wrapper" data-aos="zoom-in">
        <Link to='About-me' smooth={true} duration={400} className="scroll-container">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </>
  );
}

export default ScrollDown