// import logo from "./logo.svg";
import React, { useState } from "react";
import './App.css'
import './components/navbar/Navbar.css'
import NavBar from "./components/navbar/NavBar";
import Logo from "./components/navbar/Logo";
import MenuButton from "./components/navbar/MenuButton";
import Description from "./components/header/Description";
import Title from "./components/header/Title";
import ScrollDown from "./components/header/ScrollDown";
import AboutTitle from "./components/about/AboutTitle";
import Info from "./components/about/Info";
import Skills from "./components/about/Skills";
import ProjectTitle from "./components/projects/ProjectTitle";
import Projects from "./components/projects/Projects";
import ContactTitle from "./components/contact/ContactTitle";
import ContactForm from "./components/contact/ContactForm";
import Name from "./components/footer/Name";
import SocHandle from "./components/footer/SocHandle";
import Copyright from "./components/footer/Copyright";
import { BrowserRouter as Router} from "react-router-dom";
// import React from 'react'

const App = () => {
  const [scroll, setScroll] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  });

  return (
    <>
      <Router>
        <div className="home-wrapper">
          {" "}
          {/*----- Home section-------*/}
          <nav className={scroll? 'nav-wrapper bg' : 'nav-wrapper'}>
            <Logo />
            <NavBar />
            {/* <Routes>
              <Route exact path="/" element={<Title />}></Route>
              <Route exact path="/about" element={<AboutTitle />}></Route>
              <Route exact path="/projects" element={<ProjectTitle />}></Route>
              <Route exact path="/contact" element={<ContactTitle />}></Route>
            </Routes> */}
            <MenuButton />
          </nav>
          <main>
            <section className="home">
              <Title />
              <Description />
            </section>
            <ScrollDown />
          </main>
        </div>
        <section className="about-me">
          {" "}
          {/*----- About me  section-------*/}
          <AboutTitle />
          <div className="info-skills">
            <Info />
            <Skills />
          </div>
        </section>
        <section className="projects-wrapper">
          {" "}
          {/*----- Projects section-------*/}
          <div className="projects">
            <ProjectTitle />
            <Projects />
          </div>
        </section>
        <section className="contact-wrapper">
          {" "}
          {/*----- Contact section-------*/}
          <ContactTitle />
          <ContactForm />
        </section>
        <footer className="footer-wrapper">
          {" "}
          {/*----- Footer section-------*/}
          <div className="footer">
            <Name />
            <SocHandle />
          </div>
          <Copyright />
        </footer>
      </Router>
    </>
  );
}

export default App

