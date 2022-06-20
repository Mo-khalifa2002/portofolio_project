import React from "react";
import "./experience.scss";
import { SiTruenas } from "react-icons/si";
import { BsDashLg } from "react-icons/bs";

const Experience = () => {
  return (
    <div>
      <section
        id="experience"
        className="mt-5 mr-5 experience-section text-capitalize text-light my-3"
      >
        <h3 className="my-2 fs-4 text-center">what skills i have !</h3>
        <h2 className="mt-2 mexp mb-4 text-light fw-bold">my experience</h2>

        <div className="container">
          <div className="row gap-3 d-flex justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12 right-exp">
              <div className="row">
                <div className="col-sm-6">
                  {/* <div className="d-flex"> */}
                  <div className="exp-content d-flex align-items-start">
                    <div className="exp-icon"></div>
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      Html
                    </h3>
                    <h5 className="level-exp mb-4">Excelent</h5>
                  </div>
                  {/* </div> */}
                </div>
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      Css
                    </h3>
                    <h5 className="level-exp mb-4">Very Good</h5>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      JavaScript
                    </h3>
                    <h5 className="level-exp mb-4">Average</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      React JS
                    </h3>
                    <h5 className="level-exp mb-4">Good</h5>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      Bootstrap
                    </h3>
                    <h5 className="level-exp mb-4">Very Good</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      MUI
                    </h3>
                    <h5 className="level-exp mb-4">Good</h5>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 right-exp">
              <div className="row">
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      React-router
                    </h3>
                    <h5 className="level-exp mb-4">Very Good</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      Sass
                    </h3>
                    <h5 className="level-exp mb-4">Excelent</h5>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      Axios
                    </h3>
                    <h5 className="level-exp mb-4">Good</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                      <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      React Reveal
                    </h3>
                    <h5 className="level-exp mb-4">Very Good</h5>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                       <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      Email js
                    </h3>
                    <h5 className="level-exp mb-4">Good</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="exp-content d-flex align-items-start">
                    <h3 className="text-light fw-bold ml-2 text-capitalize">
                          <span className="text-info">
                        <BsDashLg />
                      </span>{" "}
                      Redux
                    </h3>
                    <h5 className="level-exp mb-4">Still Learning</h5>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
