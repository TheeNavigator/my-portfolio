import React, { useState } from "react";
import NavLinks from "../navbar-links/NavLinks";
import "./About.css";

const About = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`container ${active ? "active" : ""}`} id="about">
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
                <p>
                  Hello! I am a determined individual who embarked on a journey
                  into the world of technology with a passion for innovation and
                  problem-solving. My academic journey led me to pursue a degree
                  in Electrical Engineering with a focus on Computer Systems at
                  Vaal University of Technology, where I began my studies in
                  2020.
                  <br />
                  <br />
                  The road wasn't always easy, but I held onto my perseverance
                  and commitment, ensuring that I did not give up on my dreams.
                  Along the way, I discovered my deep interest in software
                  development and its incredible potential for innovation. In
                  June 2023, I took a significant step in my career by
                  participating in a short Azure program at Dynamic DNA. This
                  experience provided me with valuable insights into cloud
                  technologies, enhancing my skills and knowledge in the rapidly
                  evolving tech landscape.
                  <br />
                  <br />
                  Shortly after, in September, I secured a Full Stack Java
                  Software Development learnership — an opportunity that allowed
                  me to immerse myself in the field of technology. Throughout
                  this journey, I gained hands-on experience and practiced
                  various aspects of full-stack development. Working within a
                  dynamic team, we collaborated on numerous projects, honing my
                  skills and exposing me to the multifaceted nature of software
                  development.
                  <br />
                  <br />
                  This collective experience has not only equipped me with
                  technical expertise but also instilled in me a deep
                  appreciation for teamwork, effective communication, and the
                  constant pursuit of learning. I am excited about the endless
                  possibilities that lie ahead and look forward to contributing
                  my skills and passion to the ever-evolving tech industry.
                </p>
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

export default About;
