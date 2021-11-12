import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
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
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                    </NavLink>

                    <NavLink style={{
                        marginRight: '15px',
                        textDecoration: 'none',
                        color: 'white'
                    }} to="/explore">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Explore
                        </Typography>
                    </NavLink>

                    <NavLink style={{
                        marginRight: '15px',
                        textDecoration: 'none',
                        color: 'white'
                    }} to="/login">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Login
                        </Typography>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;