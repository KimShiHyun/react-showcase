import React from "react";

const Card = (props) => (
  <div className="col mb-5">
    <div className="card h-100">
      <div className="card-img-top">
        <img className="projImg" src={props.image} alt="Project Showcase" />
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">{props.name}</h5>
      </div>
      <div className="card-footer text-center">
        <a
          href={props.githubLink}
          type="button"
          className="btn btn-sm mb-1 m-1"
        >
          <i className="fab fa-github-square fa-lg"></i>&nbsp;GitHub Repo
        </a>
        <a
          href={props.deployedLink}
          type="button"
          className="btn btn-sm mb-1 m-1"
        >
          Deployed Application
        </a>
      </div>
    </div>
  </div>
);

export default Card;
