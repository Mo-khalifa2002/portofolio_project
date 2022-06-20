import React from "react";
import img1 from "../../assets/portfolio1.jpg";

const SingleWork = ({ workk }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card mb-4">
        <img src={workk.img} className="card-img-top" alt={workk.title} />
        <div className="card-body">
          <p className="card-text fs-4 fw-bold text-capitalize">
            {workk.title ? <div>{workk.title}</div> : <div>title mistake</div>}
          </p>
          <p className="card-text  fw-bold text-capitalize">
            {workk.title ? (
              <div>{workk.responsive} 😎</div>
            ) : (
              <div>responsive: 🤷‍♀️</div>
            )}
          </p>
          <div className="por-buttons d-flex align-items-center gap-3">
            {workk.github ? (
              <a target="_blank" href={workk.github} className="button">
                Github
              </a>
            ) : (
              <a target="_blank" className="button button-danger">
                No Github
              </a>
            )}

            {workk.demo ? (
              <a
                target="_blank"
                href={workk.demo}
                className="button button-primary"
              >
                Demo
              </a>
            ) : (
              <a target="_blank" className="button button-danger">
                No Demo
              </a>
            )}
            {workk.youtubeLink ? (
              <a target="_blank" href={workk.youtubeLink} className="button">
                Video
              </a>
            ) : (
              <a target="_blank" className="button button-danger">
                No video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWork;
