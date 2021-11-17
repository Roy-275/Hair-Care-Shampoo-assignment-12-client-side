import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <Header></Header>
            <Typography variant="h4" sx={{ color: '#146422', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                Please Login
            </Typography>

            <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{
                        my: '10px',
                        width: '50%'
                    }}
                    onBlur={handleOnBlur}
                    name="email"
                    label="Your Email"
                    type="text"
                /> <br />

                <TextField
                    sx={{
                        my: '10px',
                        width: '50%'
                    }}
                    onBlur={handleOnBlur}
                    name="password"
                    label="Password"
                    type="password"
                /> <br />

                <Button type="submit" variant="contained">Login</Button>

            </form>
            <Typography variant="h6" sx={{ color: 'purple', my: '10px', fontWeight: 400 }} gutterBottom component="div">
                Not a user? <NavLink to="/register">Register Now</NavLink>
            </Typography>

            <Footer></Footer>
        </div>
    );
};

export default Login;