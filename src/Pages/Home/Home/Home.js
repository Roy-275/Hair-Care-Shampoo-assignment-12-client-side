import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Typography variant="h4">
                This is home component
            </Typography>
            <Footer></Footer>
        </div>
    );
};

export default Home;