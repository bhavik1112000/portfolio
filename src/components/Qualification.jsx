import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const toggle1 = () => {
    if (active1 == true) {
      setActive1(!active1);
      setActive2(!active2);
    }
  };
  const toggle2 = () => {
    if (active1 == false) {
      setActive2(!active2);
      setActive1(!active1);
    }
  };
  return (
    <div className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container main container">
        <div className="qualification__tabs">
          <div
            className={
              !active1
                ? "qualification__button button--flex button__active"
                : "qualification__button button--flex"
            }
            onClick={toggle1}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Eduacation
          </div>
          <div
            className={
              active2
                ? "qualification__button button--flex button__active"
                : "qualification__button button--flex"
            }
            onClick={toggle2}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              !active1
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
            id="education"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Engineer</h3>
                <span className="qualification__subtitle">GTU</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2018-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">SSC</h3>
                <span className="qualification__subtitle">GTU</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2014-2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">GSEB</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2016-2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>

          <div
            className={
              active2
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Google</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2018-2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Microsoft</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2014-2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
              <div>
                <h3 className="qualification__title">UI Designer</h3>
                <span className="qualification__subtitle">ABC</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2016-2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
