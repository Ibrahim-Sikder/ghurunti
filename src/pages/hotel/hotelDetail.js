import React from 'react';
import HotelDetails from '../../../components/Hotel/HotelDetails/HotelDetails';
import TourPackage from '../../../components/Tour/TourPackage/TourPackage';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';

const hotelDetail = () => {
    return (
        <div>
            <Nav/>
            <HotelDetails/>
            <div className="px-[50px] mb-20">
            <TourPackage/>
            </div>
            <Footer/>
        </div>
    );
};

export default hotelDetail;