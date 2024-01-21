import React from 'react';

import ProfileRightSide from './ProfileRightSide/ProfileRightSide';
import B2CDashboardLayout from '../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout';
import Container from '@/ui/Container';


const index = () => {
    return (
        <B2CDashboardLayout>
            <ProfileRightSide />
        </B2CDashboardLayout>
    );
};

export default index;