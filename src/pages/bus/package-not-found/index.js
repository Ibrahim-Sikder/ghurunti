import React from 'react';
import Footer from '../../../../components/Footer/Footer';
import Nav from '../../../../components/NavBarr/Nav';

const index = () => {
    return (
        <div>
            <Nav/>
            <div className="flex items-center justify-center h-screen">
                <h3 className='text-5xl font-bold '>No package found</h3>
            </div>
            <Footer/>
        </div>
    );
};

export default index;