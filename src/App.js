import './App.css';
import './index.css';
import React from 'react';
import Home from './Pages/Home/Home';
import Rgsbox from './Pages/Rgsdata/Rgsbox';
import Solving from './Pages/SolvingComplex/Solving';
import Solvingdata from './Pages/SolvingComplex/Solvingdata';
import Industry from './Pages/IndustryExp/Industry';
import Services from './Pages/Services/Services';
import ClientStory from './Pages/SuccessStroies/ClientStory';
import OurPartner from './Pages/OurPartner/OurPartner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarNew from './Pages/Newnav/NavbarNew';
//import DataEngineer from './Pages/DataEng/DataEngineer';
import Dataeng from './Pages/DataEngineer/Dataeng';

import CloudEngineer from './Pages/CloudEng/CloudEngineer';
import HomeSection from './Components/Homecomp/HomeSection';
import Navbar from './Components/Navbar/Navbar';
//  import Footer from './Pages/Footers/Footer';
import DataEngineerSec from './Components/DataEngineerComp/DataEngineerSec';


function App() {
  return (
    <div className='App'>
      <section className='h-screen bg-empower bg-cov
       font=[Poppins] md:bg-top bg-center'>
      <Router>
       <NavbarNew />
      
      
     

        {/* <Navbar/> */}
      
 
        <Routes>
          
            <Route path='/' element={<HomeSection />} />   

          <Route path='/services' element={<Services />} />
          <Route path='/industry' element={<Industry />} />

          <Route path='/solving' element={<Solving />} />
          <Route path='/clientstory' element={<ClientStory />} />
          {/* <Route path='/ourpartner' element={<OurPartner/>} /> */}

          {/* <Route path='/dataeng' element={<DataEngineer/>} /> */}
          <Route path='/dataeng' element={<DataEngineerSec />} />

          <Route path='/cloudeng' element={<CloudEngineer />} />
        </Routes>
      </Router>
      {/* <Footer/>  */}
      </section>
    </div>
  );
}

export default App;
