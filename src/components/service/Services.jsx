import React from 'react'
import Service_Data from '../../assets/services_data'
import './Services.css'

const Services = () => {
  return (
    <div className='services' id='services'>
        <div className="services-title">
            <h1>My Services</h1>
        </div>

        <div className="services-container">
            {Service_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
            })}
           
        </div>
    </div>
  )
}

export default Services