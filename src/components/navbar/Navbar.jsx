import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import AnchorLink component
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [menu, setMenu] = useState("home");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  

  return (
    <nav className="nav">
      <AnchorLink href="#home" className="nav__brand">
        The_Navigator
      </AnchorLink>
      <ul className={active}>
      <AnchorLink className="anchor-link" href="#home">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
        </AnchorLink>

        <AnchorLink className="anchor-link" offset={50} href="#about">
          <li
            onClick={() => setMenu("about")}
            className={menu === "about" ? "active" : ""}
          >
            About Me
          </li>
        </AnchorLink>

        <AnchorLink className="anchor-link" offset={50} href="#services">
          <li
            onClick={() => setMenu("services")}
            className={menu === "services" ? "active" : ""}
          >
            Services
          </li>
        </AnchorLink>

        <AnchorLink className="anchor-link" offset={50} href="#skills">
          <li
            onClick={() => setMenu("skills")}
            className={menu === "skills" ? "active" : ""}
          >
            Skills
          </li>
        </AnchorLink>

        <AnchorLink className="anchor-link" offset={50} href="#projects">
          <li
            onClick={() => setMenu("projects")}
            className={menu === "projects" ? "active" : ""}
          >
            Projects
          </li>
        </AnchorLink>

        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <li
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact Me
          </li>
        </AnchorLink>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
