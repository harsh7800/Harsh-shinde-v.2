import React from 'react'
import './info.css'
import aboutMeImg from './devloper.jpeg'

const Info = () => {
  return (
    <>
      <div className="about-me">
        <div
          className="about-info"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <p>
            * I completed my engineering in Electrical so yeah,you can say that
            i am from a non-coding background. but i dont think that matters
            until i get your work done. during this quarantine i found myself
            intrested in programming so, I started digging more about it, then i
            came across web-devlopement now, i started learning further to be a{" "}
            <a
              href="https://www.w3schools.com/whatis/whatis_fullstack.asp"
              target="blank"
            >
              full-stack web-devloper.
            </a>
          </p>
          <p>
            * I am currently doing a internship at ------------- company,I know
            I will gain much experience from working in the real world projects.
            And i aim to contribute as much i can with all the knowledge i have
            and get your work done perfectly.
          </p>
          <p>
            * I am ready to work for you as a freelancer so, feel free to
            contact me. I can build your website the way you want it to be.
          </p>
        </div>

        <div className="about-img">
          <img
            data-aos="flip-down"
            data-aos-delay="500"
            data-aos-duration="500"
            src={aboutMeImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Info