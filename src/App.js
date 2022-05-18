// import logo from "./logo.svg";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import Logo from "./components/navbar/Logo";
import MenuButton from "./components/navbar/MenuButton";
import './App.css'
import Description from "./components/header/Description";
import Title from "./components/header/Title";
import ScrollDown from "./components/header/ScrollDown";
import AboutTitle from "./components/about/AboutTitle";
// import { BrowserRouter as Router } from "react-router-dom";
// import React from 'react'

export default function App() {
  return (
    <>
      <div className="home-wrapper">
    <nav>
      <Logo/>
      <NavBar />
      <MenuButton/> 
    </nav>
    <main>
          <section className="home">
            <Title />
          <Description />
          </section>
          <ScrollDown />
          <section className="about-me">
            <AboutTitle/>
          </section>
    </main>
      </div>
    </>
  );
}

