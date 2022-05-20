import React from 'react'
import './contactForm.css'

const ContactForm = () => {
  return (
    <>
      <div className="contact-container" data-aos="zoom-in">
        <form action="" onSubmit="">
          <h3>Fill the Following</h3>
          <input id="name-input" type="text" placeholder="Enter your name" required/>
          <input id="email-input" type="text" placeholder="Enter your email" required/>
          <textarea
            name="email"
            id="message-input"
            placeholder="Enter a short message"
            required
          ></textarea>
          <button className="submitBtn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm