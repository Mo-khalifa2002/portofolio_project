import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <div
          ref="#"
          className="footer-header text-center text-capitalize fw-bold mb-4 mt-3"
        >
          mo-khalifa
        </div>
        <div className="footer-section1">
          <ul className="footer-section-ul d-flex justify-content-center align-items-center gap-3 text-center">
            <li ref="#" className="single-footer-section">
              Home
            </li>
            <li ref="about" className="single-footer-section">
              About
            </li>
            <li ref="portofolio" className="single-footer-section">
              Portofolio
            </li>
            <li ref="services" className="single-footer-section">
              Services
            </li>
            <li ref="testemonials" className="single-footer-section">
              Testemonials
            </li>
            <li ref="contact" className="single-footer-section">
              Contact
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
