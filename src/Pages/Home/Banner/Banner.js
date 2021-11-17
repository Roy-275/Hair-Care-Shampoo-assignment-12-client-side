import { Typography } from '@mui/material';
import React from 'react';
import homeBanner from '../../../images/home banner.jpg'

const bannerStyle = {
    background: `url("${homeBanner}")`,
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const Banner = () => {
    return (
        <div style={bannerStyle}>
            <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'white', mb: '300px' }} variant="h3" gutterBottom component="div">
                Hair Care Shampoo
            </Typography>

            <Typography sx={{ textAlign: 'left', color: '#EB350E', ml: '50px', fontWeight: 600 }} variant="h4" gutterBottom component="div">
                Use Our products And Get a Noticable Change
            </Typography>
        </div>
    );
};

export default Banner;