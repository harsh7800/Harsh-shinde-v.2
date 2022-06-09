import React from 'react'
import { Link } from 'react-router-dom';
import './Projects.css'


const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="project-1" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <h2 id="title">Space-Tourist</h2>
          <button id="caseStudy"><a target={"_blank"} href="https://space-tourists.web.app/" style={{ color: "black", textDecoration: "none"}}> Case Study </a></button> 
        </div>
        <div className="project-2" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <h2 id="title">Upbox</h2>
          <button id="caseStudy"><a target={"_blank"} href="https://harsh7800.github.io/Upbox/" style={{ color: "black", textDecoration: "none"}}> Case Study </a></button>
        </div>
        <div className="project-3" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <h2 id="title">Snap</h2>
          <button id="caseStudy"><a target={"_blank"} href="https://harsh7800.github.io/Snap-Reactjs/home" style={{ color: "black", textDecoration: "none"}}> Case Study </a></button>
        </div>
      </div>
    </>
  );
}

export default Projects