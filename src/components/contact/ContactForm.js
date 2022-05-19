import React from 'react'
import './contactForm.css'

const ContactForm = () => {
  return (
        <>
        <form action="">
              <h3>Fill the Following</h3>
              <input id='name-input' type="text" placeholder='Enter your name' />
              <input id='email-input' type="text" placeholder='Enter your email' />
              <input id='message-input' type="text" placeholder='Enter short message' />
              <button className='submitBtn'>Submit</button>
        </form>
        </>
  )
}

export default ContactForm