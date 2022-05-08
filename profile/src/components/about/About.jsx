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
                  <div className="col-sm-12 col-md-6 col-lg-3 about-right-card">
                    <div className="about-icon p-2 mt-2 mb-2 fs-2">
                      <GrProjects />
                    </div>
                    <h3 className="about-card-par text-center text-capitalize mt-2 mb-2 text-light fw-bold">
                      projects
                    </h3>
                    <p className="text-center mb-3">80+ projects</p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 about-right-card">
                    <div className="about-icon p-2 mt-2 mb-2 fs-2">
                      <BsFillPersonFill />
                    </div>
                    <h3 className="about-card-par text-center text-capitalize mt-2 mb-2 text-light fw-bold">
                      experience
                    </h3>
                    <p className="text-center mb-3">3+ years of working</p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 about-right-card">
                    <div className="about-icon p-2 mt-2 mb-2 fs-2">
                      <BsPeopleFill />
                    </div>
                    <h3 className="about-card-par text-center text-capitalize mt-2 mb-2 text-light fw-bold">
                      clinets
                    </h3>
                    <p className="text-center mb-3">300+ clients</p>
                  </div>
                </div>
              </div>
              <p className="about-par fs-5 mt-2 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                perferendis, natus quis nulla, harum quia porro debitis aliquam
                possimus nam ea tempore, ex voluptates eaque eius et voluptatum
                aut explicabo. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fuga voluptates facere quasi inventore quaerat
                temporibus necessitatibus natus aspernatur sit placeat?
              </p>
              <div className="about-button">
                <a className="button">let's talk</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
