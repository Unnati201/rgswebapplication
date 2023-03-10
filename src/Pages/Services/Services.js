import React from 'react';
import Servicesdata from './Servicesdata';


const Services = () => {
  return (
    
        
    <div>
    <div className="services-h2-styles">
    <h3>Our Services​</h3>
    </div>   
        
<div className='service-wrapp'>
 
<Servicesdata
       title="Data Engineering & Solutions"
       description=""
        
      />
      
      <Servicesdata
       title="Digital Engineering & Transformation"
      description=""
        img="rgs-img/business.jpg"
       
      />

      <Servicesdata
       title="Cloud Engineering & Platform"
       description=""
        
      />
   
   <Servicesdata
    title="Consulting & Advisory"
     description=""
       
       
      />
   
    </div>
</div>
    
       
  )
}

export default Services;
