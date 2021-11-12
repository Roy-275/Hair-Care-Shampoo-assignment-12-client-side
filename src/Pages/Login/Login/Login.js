import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <Typography variant="h5">
                This is login page
            </Typography>
            <Footer></Footer>
        </div>
    );
};

export default Login;