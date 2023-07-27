import React from 'react';
import TopBar from '../../../components/TopBar/TopBar';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import HotelSearch from '../../../components/SearhPage/HotelSearch';
import dynamic from "next/dynamic";

const SearcPage = () => {
     return (
          <div>
               <TopBar/>
               <Header/>
               <HotelSearch/>
               <Footer/>
          </div>
     );
};


export default dynamic (() => Promise.resolve(SearcPage), {ssr: false})
