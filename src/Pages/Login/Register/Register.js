import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import Header from '../../Shared/Header/Header';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Header></Header>
            <Typography variant="h4" sx={{ color: '#146422', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                Register Here
            </Typography>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <form >
                    <TextField
                        sx={{
                            my: '20px'
                        }}
                        label="Your Name"
                        type="text"
                    /> <br />

                    <TextField
                        sx={{
                            my: '20px'
                        }}
                        label="Your Email"
                        type="email"
                    /> <br />

                    <TextField
                        sx={{
                            my: '20px'
                        }}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    /> <br />

                    <Button variant="contained">Login</Button>

                </form>
            </Box>

            <Typography variant="h6" sx={{ color: 'purple', my: '10px', fontWeight: 400 }} gutterBottom component="div">
                Already Registered? <NavLink to="/login">Login</NavLink>
            </Typography>

            <Footer></Footer>

        </div>
    );
};

export default Register;