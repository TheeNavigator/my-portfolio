import React, { useState } from "react";
import NavLinks from "../navbar-links/NavLinks";
import './Home.css';


function Home() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`container ${active ? "active" : ""}`}>
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">
            Sthembiso<span>Mametja</span>
          </h3>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="main">
          <header>
            <div className="overlay">
              <div className="inner">
                <h2 className="home-title">Full Stack Java Developer</h2>
                <p className="content">
                  A passionate Full Stack Java Developer with a knack for
                  turning ideas into high-quality, scalable software solutions.
                  With a strong foundation in both front-end and back-end
                  technologies, I bring a holistic approach to web development.
                </p>

                {/* <div className="home-connect"> */}
                  <a href="">
                    <i className="bi bi-github icon"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin icon"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-whatsapp icon"></i>
                  </a>
                {/* </div> */}
              </div>
            </div>
          </header>
        </div>

        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>

      <NavLinks/>
    </div>
  );
}

export default Home;
