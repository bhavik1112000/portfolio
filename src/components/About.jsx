import React from "react";
import "./about.css";
import about from "../assets/img/about.jpg";
import cv from "../assets/pdf/Alexa-Cv.pdf";

const About = () => {
  return (
    <div className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container main grid">
        <img src={about} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum
            iusto tempore fugit exercitationem! Voluptate voluptatum, nam nihil
            corrupti amet explicabo! Tempore ut autem,
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">
                Years <br />
                exparience
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> Projects
              </span>
            </div>
            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a href={cv} className="button button--flex">
              Download CV <i className="uil uil-download-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
