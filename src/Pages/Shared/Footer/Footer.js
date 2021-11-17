import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div style={{ textAlign: 'center', background: 'lightgray', marginTop: '50px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{ pb: 5, pt: 3 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={6} md={4}>
                        <Typography variant="p" sx={{ color: 'black', fontWeight: 800 }} gutterBottom component="p">
                            Quick Links
                        </Typography>
                        <Link style={{ textDecoration: 'none', fontWeight: '500' }} to='/'> Contact Us </Link> <br />
                        <Link style={{ textDecoration: 'none', fontWeight: '500' }} to='/'> About Us </Link> <br />
                        <Link style={{ textDecoration: 'none', fontWeight: '500' }} to='/'> Career </Link> <br />
                        <Link style={{ textDecoration: 'none', fontWeight: '500' }} to='/'> Privacy Policy </Link>
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Typography variant="p" sx={{ color: 'black', fontWeight: 800 }} gutterBottom component="p">
                            Join Us in Social Media
                        </Typography>
                        <Link style={{ textDecoration: 'none', fontWeight: '500' }} to='/'> Facebook </Link> <br />
                        <Link style={{ textDecoration: 'none', fontWeight: '500' }} to='/'> LinkedIn </Link> <br />
                        <Link style={{ textDecoration: 'none', fontWeight: '500' }} to='/'> Instagram </Link> <br />
                        <Link style={{ textDecoration: 'none', fontWeight: '500' }} to='/'> Stack Overflow </Link>
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Typography variant="p" sx={{ color: 'black', fontWeight: 800 }} gutterBottom component="p">
                            Our Outlets
                        </Typography>
                        <Link style={{ color: 'blue', textDecoration: 'none', fontWeight: '500' }} to='/'> Mirpur </Link> <br />
                        <Link style={{ color: 'blue', textDecoration: 'none', fontWeight: '500' }} to='/'> Savar </Link> <br />
                        <Link style={{ color: 'blue', textDecoration: 'none', fontWeight: '500' }} to='/'> Dhanmondi </Link> <br />
                        <Link style={{ color: 'blue', textDecoration: 'none', fontWeight: '500' }} to='/'> Bonani </Link>
                    </Grid>
                </Grid>
                <Typography variant="p" sx={{ color: 'black', fontWeight: 400, pb: 1 }} gutterBottom component="p">
                    &copy;Copyright 2021 Anik Roy &nbsp;&nbsp;&nbsp;   | &nbsp;&nbsp;&nbsp;  All right reserved
                </Typography>
            </Box>
        </div>
    );
};

export default Footer;