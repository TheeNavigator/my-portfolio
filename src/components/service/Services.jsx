import React, { useState } from 'react';
import Service_Data from '../../assets/services_data';
import './Services.css';

const Services = () => {
  const [expanded, setExpanded] = useState(Array(Service_Data.length).fill(false));

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {Service_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>
                {expanded[index] ? service.s_full_desc : service.s_desc}
              </p>
              <div className="services-readmore" onClick={() => toggleReadMore(index)}>
                <p>{expanded[index] ? "Show Less" : "Read More"}</p>
                <i className={`bi ${expanded[index] ? 'bi-arrow-left' : 'bi-arrow-right'}`}></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
