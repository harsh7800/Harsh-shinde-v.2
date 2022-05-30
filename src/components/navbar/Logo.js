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
        data-aos="fade-down-right"
        data-aos-delay="500"
        data-aos-duration="1000"
      />
    </>
  );
}

export default Logo