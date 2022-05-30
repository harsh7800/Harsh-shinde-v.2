import React from 'react'
import './description.css'
import { Link } from 'react-scroll';

const Description = () => {
  return (
    <>
      <div
        className="description"
        data-aos="zoom-in-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <Link to="Projects" smooth={true} duration={900}>
          <button id="projectsBtn">Projects</button>
        </Link>
      </div>
    </>
  );
}

export default Description