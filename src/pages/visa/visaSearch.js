import React from 'react';
import VisaSearch from '../../../components/Vissa/VisaSearch/VisaSearch';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';

const visaSearch = () => {
    return (
        <div>
            <Nav/>
            <VisaSearch/>
            <Footer/>
        </div>
    );
};


export default visaSearch;