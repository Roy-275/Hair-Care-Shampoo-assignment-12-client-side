import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../../Shared/Product/Product';

const BestProducts = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 3, mx: 5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Product key={index}>

                    </Product>
                ))}
            </Grid>
        </Box>
    );
};

export default BestProducts;