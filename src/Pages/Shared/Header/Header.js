import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <NavLink style={{
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: 'white'
                        }} to="/home">
                            <Typography variant="h6" component="a">
                                Home
                        </Typography>
                        </NavLink>

                        <NavLink style={{
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: 'white'
                        }} to="/explore">
                            <Typography variant="h6" component="a">
                                Our Products
                        </Typography>
                        </NavLink>
                    </Box>

                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{
                                    marginRight: '15px',
                                    textDecoration: 'none',
                                    color: 'white'
                                }} to="/dashboard">
                                    <Typography variant="h6" component="a">
                                        Dashboard
                                </Typography>
                                </NavLink>
                                <Button onClick={logout} variant="contained">
                                    Logout
                            </Button> &nbsp;
                            <Typography variant="h6" component="a">
                                    {user.displayName}
                                </Typography>

                            </Box>
                            :
                            <Box>
                                <NavLink style={{
                                    marginRight: '15px',
                                    textDecoration: 'none',
                                    color: 'white'
                                }} to="/login">
                                    <Typography variant="h6" component="a">
                                        Login
                                </Typography>
                                </NavLink>
                            </Box>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;