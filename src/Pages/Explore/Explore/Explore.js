import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Explore = () => {
    return (
        <div>
            <Header></Header>
            <Typography variant="h5">
                This is explore page where you will see all the products
            </Typography>
            <Footer></Footer>
        </div>
    );
};

export default Explore;