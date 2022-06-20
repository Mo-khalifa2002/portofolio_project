import React from "react";
import "./footer.scss";
import { BsMessenger } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import profile from "../../assets/me.png";

const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <footer class="footer-distributed p-5">
          <div class="footer-left">
            <div className="imgg">
              <img src={profile} alt="" />
            </div>
            <p class="footer-links d-flex gap-2 align-items-center">
              <a href="#home">Home</a>
              <a href="#portofolio">Portofolio</a>
              <a href="#testemonials">Testemonials</a>
              <a href="#contact">Contact</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
            </p>

            <p class="footer-company-name">Mo-khalifa &copy; 2022</p>
          </div>

          <div class="footer-center">
            <div className="mb-3">
              <GoLocation className="m-2 fs-3" />
              <p>
                <span className="fs-5">kafr blmisht minouf</span> minoufiah
              </p>
            </div>

            <div className="mb-3">
              <AiOutlinePhone className="m-2 fs-3" />
              <p>01556724033</p>
            </div>

            <div>
              <AiFillMessage className="m-2 fs-3" />
              <p>
                <a href="mailto:mohamedkhalifa3412@gmail.com">
                  mohamedkhalifa3412@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span>Social Media</span> mohamedkhalifa3412@gmail.com
            </p>

            <div class="footer-icons">
              <a target="_blanck" href="https://github.com/Mo-khalifa2002">
                <AiFillGithub />
              </a>
              <a
                target="_blanck"
                href="https://www.linkedin.com/in/mohamed-khalifa-909335241/"
              >
                <BsLinkedin />
              </a>
              <a
                target="_blanck"
                href="https://www.facebook.com/profile.php?id=100075439035712"
              >
                <AiFillFacebook />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
