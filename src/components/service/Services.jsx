import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Service_Data from "../../assets/services_data";
import NavLinks from "../navbar-links/NavLinks";
import "./Services.css";

const Services = () => {
  const [expanded, setExpanded] = useState(
    Array(Service_Data.length).fill(false)
  );
  const [active, setActive] = useState(false);

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`container ${active ? "active" : ""}`} id="services">
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
              <div className="inner-service">
                <Carousel showArrows={true}  showThumbs={false}>
                  {Service_Data.map((service, index) => (
                    <div key={index} className="services-format">
                      <h2>{service.s_name}</h2>
                      <p>
                        {expanded[index]
                          ? service.s_full_desc
                          : service.s_desc}
                      </p>
                      <div
                        className="services-readmore"
                        onClick={() => toggleReadMore(index)}
                      >
                        <p>{expanded[index] ? "Show Less" : "Read More"}</p>
                        
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </section>
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>

      <NavLinks />
    </div>
  );
};

export default Services;
