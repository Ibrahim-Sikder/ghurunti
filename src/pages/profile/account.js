import React from 'react';
import B2CDashboardLayout from '../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout';
import PrivateRoute from '@/routes/privateroute';


const account = () => {
    return (
        <PrivateRoute>
            <B2CDashboardLayout>
                <h3>My account page content here </h3>
            </B2CDashboardLayout>
        </PrivateRoute>
    );
};

export default account;