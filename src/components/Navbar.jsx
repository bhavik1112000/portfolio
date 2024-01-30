import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    let darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "true") {
      document.body.classList.add("dark-theme");
      setDarkTheme(true);
    }
  }, []);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem("dark-mode", !darkTheme);
    document.body.classList.toggle("dark-theme");
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header" id="header">
      <nav className="container nav">
        <a href="#" className="nav__logo">
          Bhavik
        </a>
        <div
          className="nav__menu"
          id="nav-menu"
          style={{ bottom: menu ? "0" : "-100%" }}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                offset={-70}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i class="uil uil-estate nav__icon" />
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                offset={-70}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i class="uil uil-user nav__icon" />
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                offset={-70}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i class="uil uil-file-alt nav__icon" />
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                offset={-70}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i class="uil uil-briefcase-alt nav__icon" />
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                offset={-70}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i class="uil uil-scenery nav__icon" />
                Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                offset={-70}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i class="uil uil-message nav__icon" />
                Contact
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={toggleMenu}
            id="nav-close"
          ></i>
        </div>
        <div className="nav__btns">
          <i
            onClick={changeTheme}
            className={`uil ${
              !darkTheme ? "uil-moon" : "uil-sun"
            } change-theme`}
          ></i>
          <div className="nav__toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
