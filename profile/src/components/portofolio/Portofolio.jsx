import React from "react";
import "./portofolio.scss";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img6 from "../../assets/portfolio6.jpg";
import SingleWork from "./SingleWork";
import { Link } from "react-router-dom";

const Portofolio = ({ work }) => {
  return (
    <div>
      <section id="portofolio" className="portofolio">
        <h5 className="my-2 text-center text-light text-capitalize">my work</h5>
        <h2 className="mb-5 text-center text-capitalize">portofolio</h2>

        <div className="container">
          <div className="row">
            {work.map((workk) => (
              <div className="col-lg-4">
                <SingleWork key={work.id} workk={workk} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="more">
            <button className="button text-center button-primary">
              Show More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portofolio;
