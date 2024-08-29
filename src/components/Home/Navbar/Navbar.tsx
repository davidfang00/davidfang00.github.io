import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import menu_icon from "../../../assets/menu-icon.webp";

import "./Navbar.css";

const Navbar = (props) => {
  const [sticky, setSticky] = useState(false); /* setting sticky to false */

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50
        ? setSticky(true)
        : setSticky(false); /*if scroll more than 50px we set sticky to true*/
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  /*if sticky true, dark nav bar*/
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {/* <img src={headshot} alt="" className="logo" /> */}
      <Link to="/" className="name-title">
        David Fang
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <ScrollLink to="about" smooth={true} offset={-100} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="projects" smooth={true} offset={-100} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="teaching" smooth={true} offset={-125} duration={500}>
            Teaching
          </ScrollLink>
        </li>
      </ul>
      <div className="menu-icon">
        <div
          className={mobileMenu ? "nav-icon3 open" : "nav-icon3"}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} /> */}
    </nav>
  );
};

export default Navbar;
