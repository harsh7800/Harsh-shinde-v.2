import React from "react";
import "./skills.css";
import hmtl from './logo/html.png'
import css from './logo/css.png'
import javascript from './logo/javascript.png'
import sass from './logo/sass.png'
import git from './logo/git.png'
import github from './logo/github.png'
import bootstrap from './logo/bootstrap.png'
import Reactjs from './logo/react.png'
import afterEffects from './logo/after-effects.png'
import premiere from './logo/premiere-pro.png'
import mongoDB from './logo/MongoDB.png'
import nodeJS from './logo/nodeJS.png'

const Skills = () => {
  return (
    <>
      <div
        className="skills-wrapper"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="500"
      >
        <h2>Skills</h2>
        <div className="skills-container">
          <div id="skills">
            <img src={hmtl} alt="" />
            <h3>HTML</h3>
          </div>
          <div id="skills">
            <img src={css} alt="" />
            <h3>CSS</h3>
          </div>
          <div id="skills">
            <img src={javascript} id="js" alt="" />
            <h3>Javascript</h3>
          </div>
          <div id="skills">
            <img src={Reactjs} alt="" />
            <h3>ReactJS</h3>
          </div>
          <div id="skills">
            <img src={sass} id="sass" alt="" />
            <h3>SASS</h3>
          </div>
          <div id="skills">
            <img src={git} alt="" />
            <h3>git</h3>
          </div>
          <div id="skills">
            <img src={github} alt="" />
            <h3>Github</h3>
          </div>
          <div id="skills">
            <img src={bootstrap} alt="" />
            <h3>Bootstrap</h3>
          </div>
          <div id="skills">
            <img src={mongoDB} alt="" />
            <h3>mongoDB</h3>
          </div>
          <div id="skills">
            <img src={nodeJS} alt="" id="nodejs"/>
            <h3>NodeJS</h3>
          </div>
          <div id="skills">
            <img src={premiere} id="PR" alt="" />
            <h3>Premiere Pro</h3>
          </div>
          <div id="skills">
            <img src={afterEffects} id="AE" alt="" />
            <h3>After Effects</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
