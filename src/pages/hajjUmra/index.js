import React, { useEffect, useState } from 'react'
import Umra from '../../../components/Umra/Umra'
import TopBar from '../../../components/TopBar/TopBar';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Nav from '../../../components/NavBarr/Nav';
const HajjUmra = () => {
 
  return (
    <div>
      <Nav/>
      <Umra></Umra>
      <Footer/>
    </div>
  )
}

export default HajjUmra
