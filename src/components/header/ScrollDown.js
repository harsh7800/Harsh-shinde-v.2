import React from 'react'
import './scrolldown.css'
import { Link } from 'react-scroll';

const ScrollDown = () => {
  return (
    <>
      <div
        className="scroll-wrapper"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <Link
          to="About-me"
          smooth={true}
          duration={400}
          className="scroll-container"
        >
          <div className="scroll-down"></div>
        </Link>
      </div>
    </>
  );
}

export default ScrollDown