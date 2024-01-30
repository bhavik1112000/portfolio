import React, { useState } from "react";
import "./skills.css";

const Skills = () => {
  const [skill1, setSkill1] = useState(false);
  const [skill2, setSkill2] = useState(false);

  const toggle1 = () => {
    setSkill1(!skill1);
  };
  const toggle2 = () => {
    setSkill2(!skill2);
  };
  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container main grid">
        <div
          className={
            !skill1 ? "skills__content skills__open" : "skills__content"
          }
        >
          <div className="skills__header" onClick={toggle1}>
            <i className="uil uil-brackets-curly skills__icon"></i>
            <div>
              <h1 className="skills__title">Frontend Develeper</h1>
              <span className="skills__subtitle">More than 4 years</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>
          <div className="skills__list-container">
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            skill2 ? "skills__content skills__open" : "skills__content"
          }
        >
          <div className="skills__header" onClick={toggle2}>
            <i className="uil uil-server-network skills__icon"></i>
            <div>
              <h1 className="skills__title">Backend Develeper</h1>
              <span className="skills__subtitle">More than 2 years</span>
            </div>

            <i className="uil uil-angle-down skills__arrow"></i>
          </div>
          <div className="skills__list-container">
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__php"></span>
                </div>
              </div>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Node Js</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__firebase"></span>
                </div>
              </div>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
