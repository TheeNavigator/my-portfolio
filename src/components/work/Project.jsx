import React from "react";
import Mywork_data from "../../assets/mywork_data";
import "./Project.css";

const Project = () => {
  return (
    <div className="mywork" id="projects">
      <div className="mywork-title">
        <h1>My Latest Projects </h1>
      </div>

      <div className="mywork-container">
        {Mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <img src={work.w_image} alt="" />
              <div className="overlay">
                <div className="buttons">
                  <button className="view-live-btn" title="Live Site">
                    <i className="bi bi-display"></i>
                  </button>
                  <button className="view-code-btn" title="View Code">
                    <i className="bi bi-github"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <i class="bi bi-arrow-right"></i>
      </div>
    </div>
  );
};

export default Project;
