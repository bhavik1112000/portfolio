import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const clickHandler1 = () => {
    setModal1(!modal1);
  };
  const clickHandler2 = () => {
    setModal2(!modal2);
  };
  const clickHandler3 = () => {
    setModal3(!modal3);
  };
  return (
    <div className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container main grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span
            onClick={clickHandler1}
            className="button button--flex button--small button--link services__button"
          >
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div
            className={
              modal1 ? "services__modal modal__open" : "services__modal"
            }
            // style={{ visibility: modal1 ? "visible" : "hidden" }}
            onClick={clickHandler1}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                UI/UX <br />
                Designer
              </h4>
              <i
                onClick={clickHandler1}
                className="uil uil-times services__modal-close"
              ></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develope the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Web page development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create ux element interactions</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br />
              Developer
            </h3>
          </div>

          <span
            onClick={clickHandler2}
            className="button button--flex button--small button--link services__button"
          >
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div
            className="services__modal"
            style={{ visibility: modal2 ? "visible" : "hidden" }}
            onClick={clickHandler2}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Frontend <br />
                Developer
              </h4>
              <i
                onClick={clickHandler2}
                className="uil uil-times services__modal-close"
              ></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Web page development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create ux element interactions</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-pen services__icon"></i>
            <h3 className="services__title">
              Branding <br />
              Designer
            </h3>
          </div>

          <span
            onClick={clickHandler3}
            className="button button--flex button--small button--link services__button"
          >
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div
            className="services__modal"
            style={{ visibility: modal3 ? "visible" : "hidden" }}
            onClick={clickHandler3}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Branding <br />
                Designer
              </h4>
              <i
                onClick={clickHandler3}
                className="uil uil-times services__modal-close"
              ></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Web page development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create ux element interactions</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
