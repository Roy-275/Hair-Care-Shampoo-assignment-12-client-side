import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', textAlign: 'center' }}>
                <Typography variant="h1">
                    Error! <br /> 404, Page Not Found
                </Typography>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;