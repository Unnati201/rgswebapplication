import React from 'react';
import "./Services.scss";

const Servicesdata = (props) => {
  return (

        
    <div className='services-wrap-new'>
      
      
      <h2 className="services-title">{props.title}</h2>
      <p className="services-descp">{props.description}</p>
     
    </div>
   
  )
}

export default Servicesdata;


    