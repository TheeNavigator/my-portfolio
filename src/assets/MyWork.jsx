import React from "react";
import Mywork_data from "../../assets/mywork_data";
import "./MyWork.css";

const MyWork = () => {
  return (
    <div className="mywork" id='projects'>
      <div className="mywork-title">
        <h1>My Latest Projects </h1>
      </div>

      <div className="mywork-container">
        {Mywork_data.map((work, index) => {
          return <img key={index} src={work.w_image} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <i class="bi bi-arrow-right"></i>
      </div>
    </div>
  );
};

export default MyWork;
