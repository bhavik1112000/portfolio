import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Alexa</h1>
            <span className="footer__subtitle">frontenad Developer</span>
          </div>
          <ul className="footer__links grid">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a
                style={{ display: "inline-block" }}
                href="#contact"
                className="footer__link"
              >
                Contact Me
              </a>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Copyright, All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
