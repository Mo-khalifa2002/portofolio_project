import React from "react";
import "./portofolio.scss";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img6 from "../../assets/portfolio6.jpg";

const Portofolio = () => {
  return (
    <div>
      <section id="portofolio" className="portofolio">
        <h5 className="my-2 text-center text-light text-capitalize">my work</h5>
        <h2 className="mb-5 text-center text-capitalize">portofolio</h2>

        <div className="container">
          <div className="row por-section">
            <div className="col-lg-3 col-sm-12">
              <div className="card">
                <img src={img1} class="card-img-top" alt="img1" />
                <div className="card-body">
                  <p className="card-text fw-bold text-capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="por-buttons d-flex align-items-center gap-3">
                    <a href="#" class="button">
                      github
                    </a>
                    <a href="#" class="button button-primary">
                      live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card">
                <img src={img3} class="card-img-top" alt="img1" />
                <div className="card-body">
                  <p className="card-text fw-bold text-capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="por-buttons d-flex align-items-center gap-3">
                    <a href="#" class="button">
                      github
                    </a>
                    <a href="#" class="button button-primary">
                      live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card">
                <img src={img2} class="card-img-top" alt="img1" />
                <div className="card-body">
                  <p className="card-text fw-bold text-capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="por-buttons d-flex align-items-center gap-3">
                    <a href="#" class="button">
                      github
                    </a>
                    <a href="#" class="button button-primary">
                      live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row por-section mt-5">
            <div className="col-lg-3 col-sm-12">
              <div className="card">
                <img src={img4} class="card-img-top" alt="img1" />
                <div className="card-body">
                  <p className="card-text fw-bold text-capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="por-buttons d-flex align-items-center gap-3">
                    <a href="#" class="button">
                      github
                    </a>
                    <a href="#" class="button button-primary">
                      live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card">
                <img src={img6} class="card-img-top" alt="img1" />
                <div className="card-body">
                  <p className="card-text fw-bold text-capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="por-buttons d-flex align-items-center gap-3">
                    <a href="#" class="button">
                      github
                    </a>
                    <a href="#" class="button button-primary">
                      live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card">
                <img src={img1} class="card-img-top" alt="img1" />
                <div className="card-body">
                  <p className="card-text fw-bold text-capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="por-buttons d-flex align-items-center gap-3">
                    <a href="#" class="button">
                      github
                    </a>
                    <a href="#" class="button button-primary">
                      live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portofolio;
