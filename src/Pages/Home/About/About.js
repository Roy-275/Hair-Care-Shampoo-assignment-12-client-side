import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import aboutImg from '../../../images/about.jpg'

const About = () => {
    return (
        <div style={{ textAlign: 'center', paddingTop: '5px', paddingBottom: '15px', paddingLeft: '5px', paddingRight: '5px', background: '#ddd' }}>
            <Typography variant="h3" sx={{ color: '#454654', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                Buy the best Shampoo from our shop
            </Typography>
            <Box >
                <Grid sx={{ my: 'auto' }} container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img width='90%' src={aboutImg} alt="" />
                    </Grid>
                    <Grid sx={{ mx: 'auto' }} item xs={12} md={5}>
                        <Typography variant="body2" sx={{ color: '#999', my: '10px', fontWeight: 500, textAlign: 'justify' }} gutterBottom component="div">
                            Hair care Shampoo is the most reliable shop for hair care. Here you can find local as well as foreign shampoo, conditioner gel and so many other things. If you buy product from our shop, you will get money back garuntee on product failure. You can exchange at any time you want if you haven't opened the product.
                            Our products are mostly imported from forign country and we deal with the best company available. There are so many review from customers all over the world. Explore our shop and see what clients says and choose our products. You won't regreat buying products here.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
};

export default About;