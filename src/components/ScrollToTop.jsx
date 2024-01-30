import React, { useState } from "react";
import "./scrolltotop.css";
const ScrollToTop = () => {
  const [scrollButton, setScrollButton] = useState(false);
  const scroll = () => {
    if (window.scrollY >= 560) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
  };
  window.addEventListener("scroll", scroll);
  return (
    <div
      className={
        scrollButton
          ? "scroll-to-top scroll-active"
          : "scroll-to-top scroll-not-active"
      }
      // style={{ bottom: scrollButton ? "4rem" : "-4rem" }}
    >
      <a href="#" className="nav__link">
        <i className="uil uil-arrow-up scroll__icon"></i>
      </a>
    </div>
  );
};

export default ScrollToTop;
