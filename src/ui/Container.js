import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-full h-full max-w-[1200px] mx-auto '>
            {children}
        </div>
    );
};

export default Container;