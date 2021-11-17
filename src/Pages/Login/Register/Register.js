import { CircularProgress, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Header from '../../Shared/Header/Header';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegisterSubmit = e => {

        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Header></Header>
            <Typography variant="h4" sx={{ color: '#146422', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                Register Here
            </Typography>

            {!isLoading && <form onSubmit={handleRegisterSubmit}>
                <TextField
                    sx={{
                        my: '10px',
                        width: '50%'
                    }}
                    name="name"
                    onBlur={handleOnBlur}
                    label="Your Name"
                    type="text"
                /> <br />

                <TextField
                    sx={{
                        my: '10px',
                        width: '50%'
                    }}
                    name="email"
                    onBlur={handleOnBlur}
                    label="Your Email"
                    type="email"
                /> <br />

                <TextField
                    sx={{
                        my: '10px',
                        width: '50%'
                    }}
                    name="password"
                    onBlur={handleOnBlur}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                /> <br />

                <Button type="submit" variant="contained">Register</Button>

            </form>}

            {isLoading && <CircularProgress />}

            <Typography variant="h6" sx={{ color: 'purple', my: '10px', fontWeight: 400 }} gutterBottom component="div">
                Already Registered? <NavLink to="/login">Login</NavLink>
            </Typography>

            <Footer></Footer>

        </div>
    );
};

export default Register;