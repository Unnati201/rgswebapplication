import React from 'react';
import Career from '../../Pages/Career/Career';

import Home from '../../Pages/Home/Home';
import Industry from '../../Pages/IndustryExp/Industry';
import OurPartner from '../../Pages/OurPartner/OurPartner';
import Rgsbox from '../../Pages/Rgsdata/Rgsbox';
import Services from '../../Pages/Services/Services';
import Solving from '../../Pages/SolvingComplex/Solving';
import Solvingdata from '../../Pages/SolvingComplex/Solvingdata';
import ClientStory from '../../Pages/SuccessStroies/ClientStory';
import Dataflow from '../../Pages/DataSection/Dataflow';
import Footer from '../../Pages/Footers/Footer';
import NewPartner from '../../Pages/OurNewPartner/NewPartner';
import NavbarNew from '../../Pages/Newnav/NavbarNew';
import { NavLink } from 'react-router-dom';



const HomeSection = () => {
  return (
    <div>
      {/* <NavbarNew/>     */}
    
    <Home/>  
  <Rgsbox/>
      <Solving/>
      <Solvingdata/>
      
      <Services/>
    
      <Industry/>

       {/* <OurPartner/>  */}
       <NewPartner/> 
       <ClientStory/> 
       
      <Career/>
     <Dataflow/> 
       <Footer/> 
    </div>
  )
}

export default HomeSection;

