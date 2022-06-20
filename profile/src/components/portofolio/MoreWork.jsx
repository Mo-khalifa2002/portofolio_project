import React from "react";
import SingleWork from "./SingleWork";
import { Link } from "react-router-dom";

const MoreWork = ({ moreWork }) => {
  return (
    <div>
      <section id="portofolio" className="portofolio">
        <Link to="/">
          <h5 className="my-2 container get-back text-center text-light text-capitalize">
            Get Back
          </h5>
        </Link>
        <h2 className="mb-5 text-center text-capitalize">all work</h2>

        <div className="container">
          <div className="row">
            {moreWork.map((workk) => (
              <div className="col-lg-4">
                <SingleWork key={moreWork.id} workk={workk} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center"></div>
      </section>
    </div>
  );
};

export default MoreWork;
