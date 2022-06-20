import React, { useRef } from "react";
import "./contact.scss";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";
// import emailjs from "emailjs-com";

const dis = () => {
  window.alert("cant't send message");
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0022cqn",
        "template_pzzyfpv",
        form.current,
        "iOgV3RCjltuusWhTq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.alert("The form has been subimitted");
    e.target.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div id="contact" className="contact mt-5 text-center">
          <h3 className="my-2">Get In Touch</h3>
          <h2 className="mb-5 fw-bold">contact Me</h2>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-4 col-md-12 mb-5 col-sm-12 text-center text-light">
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <a
                      target="_blank"
                      href="https://wa.me/01556724033"
                      className="cardd text-white col-sm-12 rounded p-2 mb-3 col-md-12"
                    >
                      <BsWhatsapp className="contact-icon fs-2 text-primary" />
                      <div className="email my-2 fw-bold fs-2">01556724033</div>
                     
                      <div className="message-me fw-normal fs-5">
                        Send me a message
                      </div>
                    </a>
                    <div
                    onClick={dis}
                    className="cardd rounded p-2 mb-3 col-md-12">
                      <BsMessenger className="contact-icon fs-2 text-primary" />
                      <div className="email my-2 fw-bold fs-2">
                        mo@messanger
                      </div>
                      <div className="message-me fw-normal fs-5">
                        Send me a message
                      </div>
                    </div>
                    <div
                    onClick={dis}
                    className="cardd rounded p-2 col-md-12">
                      <HiOutlineMail className="contact-icon fs-2 text-primary" />
                      <div className="email my-2 fw-bold fs-2">Email</div>
                      <a href="# " className="fw-bold fs-4">
                        mohamedkhalifa3412 <br />
                        @gmail.com
                      </a>
                      <div className="message-me fw-normal fs-5">
                        Send me a message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right div */}
              <div className="col-lg-7 col-sm-12">
                <div className="contact-left-section">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="your full name"
                    className="name"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your Email"
                    className="email"
                  />
                  <textarea
                    type="text"
                    name="message"
                    required
                    placeholder="your message"
                    className="input-message"
                  />
                  <div className="contact-button">
                    <button type="submit" className="button button-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
