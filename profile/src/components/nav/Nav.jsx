import React, { useState } from "react";
import "./nav.scss";
import { AiTwotoneBook } from "react-icons/ai";
import { FaServicestack } from "react-icons/fa";
import { MdFace } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { MdContactless } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="pb-3 nav-icons d-flex justify-content-center align-items-center gap-4 fs-2">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <FaServicestack />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiTwotoneBook />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <MdFace />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactless />
      </a>
      <a
        href="#portofolio"
        onClick={() => setActiveNav("#portofolio")}
        className={activeNav === "#portofolio" ? "active" : ""}
      >
        <CgProfile />
      </a>
    </div>
  );
};

export default Nav;
