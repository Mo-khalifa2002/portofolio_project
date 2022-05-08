import React,{useRef} from "react";
import "./contact.scss";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";
// import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_0022cqn",
  //       "template_pzzyfpv",
  //       form.current,
  //       "iOgV3RCjltuusWhTq"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   window.alert("The form has been subimitted");
  //   e.target.reset();
  // };

  return (
    <div>
      <form>
        <div id="contact" className="contact text-center">
          <h3 className="my-2">Get In Touch</h3>
          <h2 className="mb-5 fw-bold">contact Me</h2>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-4 col-sm-12 text-center text-light">
                <div className="cardd rounded p-2 mb-3">
                  <BsWhatsapp className="contact-icon fs-2 text-primary" />
                  <div className="email my-2 fw-bold fs-2">4754975492</div>
                  <a href="# " className="fw-bold fs-4">
                    mokh@gmail.com
                  </a>
                  <div className="message-me fw-normal fs-5">
                    Send me a message
                  </div>
                </div>
                <div className="cardd rounded p-2 mb-3">
                  <BsMessenger className="contact-icon fs-2 text-primary" />
                  <div className="email my-2 fw-bold fs-2">mo@messanger</div>
                  <a href="# " className="fw-bold fs-4">
                    mokh@gmail.com
                  </a>
                  <div className="message-me fw-normal fs-5">
                    Send me a message
                  </div>
                </div>
                <div className="cardd rounded p-2">
                  <HiOutlineMail className="contact-icon fs-2 text-primary" />
                  <div className="email my-2 fw-bold fs-2">Email</div>
                  <a href="# " className="fw-bold fs-4">
                    mokh@gmail.com
                  </a>
                  <div className="message-me fw-normal fs-5">
                    Send me a message
                  </div>
                </div>
              </div>
              {/* right div */}
              <div className="col-md-7 col-sm-12">
                <div className="contact-left-div">
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
