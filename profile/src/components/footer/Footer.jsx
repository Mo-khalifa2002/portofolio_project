import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <div className="footer-header text-center text-capitalize fw-bold mb-4 mt-3">
          mo-khalifa
        </div>
        <div className="footer-section1">
          <ul className="footer-section-ul d-flex justify-content-center align-items-center gap-3 text-center">
            <li className="single-footer-section">Home</li>
            <li className="single-footer-section">About</li>
            <li className="single-footer-section">Portofolio</li>
            <li className="single-footer-section">Services</li>
            <li className="single-footer-section">Testemonials</li>
            <li className="single-footer-section">Contact</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
