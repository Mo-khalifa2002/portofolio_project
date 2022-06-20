import React from "react";
import "./About.scss";
import mee from "../../assets/me-about.jpg";
import { GrProjects } from "react-icons/gr";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <section id="about" className="text-center about">
        <h5 className="text-capitalize text-light">got to know</h5>
        <h2 className="text-capitalize text-light mb-5">about me</h2>
        <div className="container">
          <div className="row about-section">
            <div className="col-lg-4">
              <div className="about-me-image">
                <div className="about-img">
                  <img src={mee} alt="" className="mee" />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="cards container">
                <div className="row gap-5 text-light text-center ml-5">
                  <div className="col-sm-12 col-md-12 col-lg-3 about-right-card">
                    <div className="about-icon p-2 mt-2 mb-2 fs-2">
                      <GrProjects />
                    </div>
                    <h3 className="about-card-par text-center text-capitalize mt-2 mb-2 text-light fw-bold">
                      projects
                    </h3>
                    <p className="text-center mb-3">18 projects</p>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3 about-right-card">
                    <div className="about-icon p-2 mt-2 mb-2 fs-2">
                      <BsFillPersonFill />
                    </div>
                    <h3 className="about-card-par text-center text-capitalize mt-2 mb-2 text-light fw-bold">
                      experience
                    </h3>
                    <p className="text-center mb-3">7 month</p>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3 about-right-card">
                    <div className="about-icon p-2 mt-2 mb-2 fs-2">
                      <BsPeopleFill />
                    </div>
                    <h3 className="about-card-par text-center text-capitalize mt-2 mb-2 text-light fw-bold">
                      clinets
                    </h3>
                    <p className="text-center mb-3">0 clients</p>
                  </div>
                </div>
              </div>
              <p className="about-par text-capitalize fs-5 mt-4 mb-5">
                Mohamed khalifa, junior react front-end developer until now, i
                am learning for about 7 month. throw this period, i have learnt
                many technologies and still learning and will learn in the
                future. with other words - love learning new technologies and
                libraries.
              </p>
              <div className="about-button">
                <a href="#contact" className="button">let's talk</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
