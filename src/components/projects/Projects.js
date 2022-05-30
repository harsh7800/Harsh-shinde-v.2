import React from 'react'
import './Projects.css'


const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="project-1" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <h2 id="title">Space-Tourist</h2>
          <button id="caseStudy">Case Study</button>
        </div>
        <div className="project-2" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <h2 id="title">Loop-Studio</h2>
          <button id="caseStudy">Case Study</button>
        </div>
        <div className="project-3" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <h2 id="title">Snap</h2>
          <button id="caseStudy">Case Study</button>
        </div>
      </div>
    </>
  );
}

export default Projects