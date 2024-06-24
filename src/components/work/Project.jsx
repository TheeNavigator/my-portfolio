import React, { useEffect, useState } from "react";
import bakeryImage from "../../assets/bakery-shop.jpg";
import bgImage from "../../assets/bg.jpg";
import chatImage from "../../assets/chat-app.jpg";
import coffeeImage from "../../assets/coffee-shop.jpg";
import loginImage from "../../assets/login.jpg";
import weatherImage from "../../assets/weather-app.jpg";
import NavLinks from "../navbar-links/NavLinks";
import "./Project.css";

const Project = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    const handleNext = () => {
      let items = document.querySelectorAll(".item");
      let slide = document.querySelector(".slide");
      slide.appendChild(items[0]);
    };

    const handlePrev = () => {
      let items = document.querySelectorAll(".item");
      let slide = document.querySelector(".slide");
      slide.insertBefore(items[items.length - 1], items[0]);
    };

    next.addEventListener("click", handleNext);
    prev.addEventListener("click", handlePrev);

    // Cleanup event listeners on component unmount
    return () => {
      next.removeEventListener("click", handleNext);
      prev.removeEventListener("click", handlePrev);
    };
  }, []);

  return (
    <div className={`container ${active ? "active" : ""}`} id="projects">
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
          <section>
            <div className="overlay">
              <div className="inner">
                <div className="slide">
                  <div
                    className="item"
                    style={{ backgroundImage: `url(${loginImage})` }}
                  >
                    <div className="content">
                      <div className="name">Login Register</div>
                      <div className="des">
                        The login and register feature allows users to securely
                        access and create accounts on the platform. It ensures a
                        seamless user experience while maintaining high
                        standards of security and data privacy.
                      </div>

                      Project Coming Soon Stay Tunned!!!!
                      {/* <div className="tech-stack">
                        <i className="bx bxl-html5" title="html"></i>
                        <i className="bx bxl-css3" title="css"></i>
                        <i className="bx bxl-postgresql" title="postgresql"></i>
                        <i className="bx bxl-spring-boot" title="springboot"></i>
                      </div> */}
                      <div className="view">
                        <a title="View On Live Server">
                          <i className="bi bi-pc-display"></i>
                        </a>
                        <a  title="View On Github">
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="item"
                    style={{ backgroundImage: `url(${chatImage})` }}
                  >
                    <div className="content">
                      <div className="name">Chat APP</div>
                      <div className="des">
                        Our Chat App is a modern, user-friendly platform
                        designed to facilitate seamless communication between
                        individuals and groups. With a focus on privacy,
                        security, and a rich feature set, our app provides an
                        engaging and reliable messaging experience for users
                        across the globe.
                      </div>
                      {/* <div className="tech-stack">
                        <i class="bx bxl-html5" title="html"></i>
                        <i class="bx bxl-css3" title="css"></i>
                        <i class="bx bxl-postgresql" title="postgresql"></i>
                        <i class="bx bxl-spring-boot" title="springboot"></i>
                      </div> */}

                      Project Coming Soon Stay Tunned!!!!
                      <div className="view">
                        <a title="View On Live Server">
                          <i class="bi bi-pc-display"></i>
                        </a>
                        <a title="View On Github">
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="item"
                    style={{ backgroundImage: `url(${bakeryImage})` }}
                  >
                    <div className="content">
                      <div className="name">Vaal Bakery</div>
                      <div className="des">
                        The Vaal Bakery is a delightful establishment known for
                        its artisanal baked goods and cozy ambiance. Located in
                        the heart of Vaal, South Africa, this bakery offers a
                        wide array of freshly baked bread, pastries, cakes, and
                        confections that cater to various tastes and
                        preferences.
                      </div>
                      Project Coming Soon Stay Tunned!!!!
                      {/* <div className="tech-stack">
                        <i class="bx bxl-html5" title="html"></i>
                        <i class="bx bxl-css3" title="css"></i>
                        <i class="bx bxl-postgresql" title="postgresql"></i>
                        <i class="bx bxl-spring-boot" title="springboot"></i>
                      </div> */}
                      <div className="view">
                        <a title="View On Live Server">
                          <i class="bi bi-pc-display"></i>
                        </a>
                        <a title="View On Github">
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="item"
                    style={{ backgroundImage: `url(${weatherImage})` }}
                  >
                    <div className="content">
                      <div className="name">Weather App</div>
                      <div className="des">
                        WeatherSense is your go-to companion for staying updated
                        with real-time weather information, forecasts, and
                        weather alerts. Whether you're planning your day,
                        preparing for a trip, or simply curious about the
                        weather conditions, WeatherSense provides accurate and
                        detailed weather data at your fingertips.
                      </div>
                      Project Coming Soon Stay Tunned!!!!
                      {/* <div className="tech-stack">
                        <i class="bx bxl-html5" title="html"></i>
                        <i class="bx bxl-css3" title="css"></i>
                        <i class="bx bxl-postgresql" title="postgresql"></i>
                        <i class="bx bxl-spring-boot" title="springboot"></i>
                      </div> */}
                      <div className="view">
                        <a title="View On Live Server">
                          <i class="bi bi-pc-display"></i>
                        </a>
                        <a title="View On Github">
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="item"
                    style={{ backgroundImage: `url(${coffeeImage})` }}
                  >
                    <div className="content">
                      <div className="name">Coffee Shop</div>
                      <div className="des">
                        Welcome to our cozy coffee shop, where the aroma of
                        freshly brewed coffee fills the air and the ambiance
                        invites you to unwind and savor the moment. Nestled in a
                        bustling neighborhood, our coffee shop is a haven for
                        coffee enthusiasts, offering a delightful range of
                        specialty coffees and a relaxing atmosphere.
                      </div>
                      {/* <div className="tech-stack">
                        <i class="bx bxl-html5" title="html"></i>
                        <i class="bx bxl-css3" title="css"></i>
                        <i class="bx bxl-postgresql" title="postgresql"></i>
                        <i class="bx bxl-spring-boot" title="springboot"></i>
                      </div> */}
                      Project Coming Soon Stay Tunned!!!!
                      <div className="view">
                        <a title="View On Live Server">
                          <i class="bi bi-pc-display"></i>
                        </a>
                        <a title="View On Github">
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="item"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  >
                    <div className="content">
                      <div className="name">Crud App</div>
                      <div className="des">
                        The CRUD app is designed to provide users with a simple
                        yet powerful interface for managing data efficiently.
                        Whether it's managing customer information, inventory
                        records, or any other type of data, the CRUD app
                        streamlines the process with intuitive features and
                        functionalities.
                      </div>
                      Project Coming Soon Stay Tunned!!!!
                      {/* <div className="tech-stack">
                        <i class="bx bxl-html5" title="html"></i>
                        <i class="bx bxl-css3" title="css"></i>
                        <i class="bx bxl-postgresql" title="postgresql"></i>
                        <i class="bx bxl-spring-boot" title="springboot"></i>
                      </div> */}
                      <div className="view">
                        <a  title="View On Live Server">
                          <i class="bi bi-pc-display"></i>
                        </a>
                        <a  title="View On Github">
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="controls">
                  <button className="prev">
                    <i className="bi bi-chevron-double-left"></i>
                  </button>
                  <button className="next">
                    <i className="bi bi-chevron-double-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>

      <NavLinks/>
    </div>
  );
};

export default Project;
