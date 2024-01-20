import React from 'react';

import ProfileRightSide from './ProfileRightSide/ProfileRightSide';
import B2CDashboardLayout from '../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout';


const index = () => {
    return (
        <div>
            <B2CDashboardLayout>
            <ProfileRightSide/>
            </B2CDashboardLayout>
        </div>
    );
};

export default index;