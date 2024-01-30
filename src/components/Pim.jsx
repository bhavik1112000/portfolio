import React from "react";
import "./pim.css";
import project from "../assets/img/project.png";

const Pim = () => {
  return (
    <div className="project section">
      <div className="project__bg">
        <div className="project__container container main grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Contact me now and get 30% discount on your new project.
            </p>
            <a href="#contact" className="button button--flex button--white">
              {" "}
              contact Me
              <i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>
          <img src={project} alt="" className="project__img" />
        </div>
      </div>
    </div>
  );
};

export default Pim;
