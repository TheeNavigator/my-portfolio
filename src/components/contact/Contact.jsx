import React, { useState } from "react";
import NavLinks from "../navbar-links/NavLinks";
import "./Contact.css";

const Contact = () => {

  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a89fa892-7158-48cf-a76c-d3708bc37e75");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);
        }
      };

  return (
    <div className={`container ${active ? "active" : ""}`} id='contact'>
     
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
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Feel free to send me a message about anything that you want me to
            work on
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <i class="bi bi-envelope">
                <p>mametjaperseverance@gmail.com</p>
              </i>
            </div>
            <div className="contact-detail">
              <i class="bi bi-telephone">
                <p>+27 71 117 3432</p>
              </i>
            </div>
            <div className="contact-detail">
              <i class="bi bi-geo-alt">
                <p>Pretoria, South Africa</p>
              </i>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required/>
          <label htmlFor="">Enter your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            style={{ resize: "none" }}
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
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

export default Contact;
