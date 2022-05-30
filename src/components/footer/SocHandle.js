import React from 'react'
import './socHandle.css'

const SocHandle = () => {
  return (
    <div className="social-handle-container">
      <h2>Social Handles</h2>
      <div className="social-handles">
        <a
          id="instagram"
          href="https://instagram.com/ig_harsh_shinde_?utm_medium=copy_link"
          target="blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          id="github"
          href="https://github.com/harsh7800?tab=repositories"
          target="blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a id="whatsapp" href=" https://wa.me/7020098227" target="blank">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

export default SocHandle