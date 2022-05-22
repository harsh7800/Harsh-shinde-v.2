import React from 'react'
import logo from './logo.svg'
import './logo.css'

const Logo = () => {
  return (
    <>
      <img
        src={logo}
        alt=""
        className="logo"
        data-aos="fade-right"
        data-aos-delay="500"
      />
    </>
  );
}

export default Logo