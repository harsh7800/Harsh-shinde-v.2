import React from 'react'
import './Projects.css'
import spaceTourists from './laptop-space.png'
import loopStudio from './laptop-loopstudio.png'
import snap from './laptop-snap.png'

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="project-1">
          <img src={spaceTourists} alt="" data-aos="zoom-in" />
          <span data-aos="fade-left">
            <h3>Space-Tourists</h3>
            <p>
              This the challenge i took from frontend mentor just to challenge
              my code skill , its just the basic website which gives your a free
              space-tour and some information about important people. please
              give me the feedback on my code.{" "}
            </p>
          </span>
        </div>
        <div className="project-2">
          <img src={loopStudio} alt="" data-aos="zoom-in" />
          <span data-aos="fade-right">
            <h3>Loop Studios</h3>
            <p>
              This is also the challenge from Frontend Mentor , I made the
              website just to test my designing and coding skills. This website
              shows how websites Layout needs to be designed in a unique and
              creative way.
            </p>
          </span>
        </div>
        <div className="project-3">
          <img src={snap} alt="" data-aos="zoom-in" />
          <span data-aos="fade-left">
            <h3>SNAP</h3>
            <p>
              This the challenge i took from frontend mentor just to challenge
              my code skill , its just the basic website which gives your a free
              space-tour and some information about important people. please
              give me the feedback on my code.{" "}
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Projects