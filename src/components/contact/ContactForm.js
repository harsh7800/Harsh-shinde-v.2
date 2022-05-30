import React, {useRef} from 'react'
import './contactForm.css'
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_boptanl",
        "template_zdokctr",
        form.current,
        "qE6UzMMYskEB9HTCS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Messaage Sent Successfully")
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset()
  };
  return (
    <>
      <div
        className="contact-container"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="500"
      >
        <form ref={form} onSubmit={sendEmail}>
          <h3>Fill the Following</h3>
          <input
            id="name-input"
            type="text"
            placeholder="Enter your name"
            name="user_name"
            required
          />
          <input
            id="email-input"
            type="text"
            placeholder="Enter your email"
            name="user_email"
            required
          />
          <textarea
            name="message"
            id="message-input"
            placeholder="Enter a short message"
            required
          ></textarea>
          <input type="submit" value="Send" id="submitBtn" />
        </form>
      </div>
    </>
  );
}

export default ContactForm