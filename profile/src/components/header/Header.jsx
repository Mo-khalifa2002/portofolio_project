import React from "react";
import "./header.scss";
import cv from "../../assets/cv.pdf";
import me from "../../assets/me.png";
import { BsFacebook } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div id="home" className="header p-4 text-center position-relative">
        <p className="header-hello mb-1 fw-bold text-capitalize text-center fs-4">
          hello from
        </p>
        <h1 className="fw-bold mb-1">Mo-khalifa</h1>
        <div className="front-end fs-6 mb-3">React js front-end developer</div>
        <div className="header-buttons d-flex justify-content-center align-items-center gap-3 mt-4 mb-4">
          <a
            href={cv}
            download
            className="download button-primary text-capitalize button"
          >
            download cv
          </a>
          <a href="#contact" className="download text-capitalize button">
            let's talk
          </a>
        </div>
        <div className="header-img d-flex justify-content-center align-items-center">
          <img src={me} alt="me" className="me" />
        </div>
        <div className="header-icons gap-2 fs-4 position-absolute d-flex justify-content-center align-items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-khalifa-909335241/"
            className="icon"
          >
            <BsLinkedin />
          </a>
          <a target="_blank"
            href="https://github.com/Mo-khalifa2002" className="icon">
            <GoMarkGithub />
          </a>
          <a
          target="_blank" href="https://www.facebook.com/profile.php?id=100075439035712" className="icon">
            <BsFacebook />
          </a>
        </div>
        <a href="#footer">
          <div className="scroll-down position-absolute text-capitalize fw-bold fs-5">
            scroll down
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
