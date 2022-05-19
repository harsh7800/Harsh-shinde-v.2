// import logo from "./logo.svg";
import React from "react";
import './App.css'
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
// import { BrowserRouter as Router } from "react-router-dom";
// import React from 'react'

export default function App() {
  return (
    <>
      <div className="home-wrapper"> 
        <nav>
          <Logo/>
          <NavBar/>
          <MenuButton/>
        </nav>
        <main>
          <section className="home">
            <Title/>
            <Description/>
          </section>
          <ScrollDown/>
        </main>
      </div>
      <section className="about-me">
        <AboutTitle />
        <div className="info-skills">
          <Info/>
          <Skills/>
        </div>
      </section>
      <section className="projects-wrapper">
        <div className="projects">
          <ProjectTitle/>
          <Projects/>
        </div>
      </section>
      <section className="contact-wrapper">
        <ContactTitle />
        <ContactForm/>
      </section>
    </>
  );
}

