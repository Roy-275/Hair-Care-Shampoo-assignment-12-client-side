import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Header></Header>
            <Typography variant="h4" sx={{ color: '#146422', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                Please Login
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
                        id="outlined-password-input"
                        label="Your Email"
                        type="text"
                    /> <br />

                    <TextField
                        sx={{
                            my: '20px'
                        }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    /> <br />

                    <Button variant="contained">Login</Button>

                </form>
            </Box>
            <Typography variant="h6" sx={{ color: 'purple', my: '10px', fontWeight: 400 }} gutterBottom component="div">
                Not a user? <NavLink to="/register">Register Now</NavLink>
            </Typography>

            <Footer></Footer>
        </div>
    );
};

export default Login;