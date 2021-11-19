import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../../Shared/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://salty-castle-47258.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <Box sx={{ flexGrow: 1, my: 3, mx: 5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
                {products.map(product => (
                    <Product product={product} key={product._id}>

                    </Product>
                ))}
            </Grid>
        </Box>
    );
};

export default AllProducts;