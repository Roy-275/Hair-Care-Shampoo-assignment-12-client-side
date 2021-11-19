import { Alert, Button, Card, CardActionArea, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Purchase = () => {
    const [product, setProduct] = useState();
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const { productId } = useParams();

    const { user } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData);
    }

    const handlePurchase = e => {
        setLoading(true);

        // collect data
        const order = {
            ...userData
        }

        // send to the server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                }
            })
            .finally(() => setLoading(false));


        e.preventDefault();
    }


    const url = `http://localhost:5000/products/${productId}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <Header></Header>
            {!product && <CircularProgress />}
            {

                product && <Grid sx={{ my: 'auto' }} container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Grid sx={{ mx: 'auto' }} item xs={11} sm={11} md={11}>
                            <Card sx={{ maxHeight: { md: '700px' } }}>
                                <CardActionArea>
                                    <img src={product.imageUrl} width="50%" alt="" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.productName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                        <Typography variant="h6" color="text.main">
                                            Price: {product.price}$
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>


                    <Grid sx={{ mx: 'auto' }} item xs={12} md={6}>
                        <Typography variant="h4" sx={{ color: '#146422', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                            Confirm Your Order
                        </Typography>

                        {orderSuccess && <Alert severity="success">Your order has been placed</Alert>}

                        {!loading && <form onSubmit={handlePurchase}>
                            <TextField
                                sx={{
                                    my: '10px',
                                    width: { xs: '90%', sm: '70%', md: '50%' }
                                }}
                                name="productName"
                                onBlur={handleOnBlur}
                                value={product.productName}
                                type="text"
                            /> <br />

                            <TextField
                                sx={{
                                    my: '10px',
                                    width: { xs: '90%', sm: '70%', md: '50%' }
                                }}
                                name="name"
                                onBlur={handleOnBlur}
                                value={user.displayName}
                                type="text"
                            /> <br />

                            <TextField
                                sx={{
                                    my: '10px',
                                    width: { xs: '90%', sm: '70%', md: '50%' }
                                }}
                                name="email"
                                onBlur={handleOnBlur}
                                value={user.email}
                                type="email"
                            /> <br />

                            <TextField
                                sx={{
                                    my: '10px',
                                    width: { xs: '90%', sm: '70%', md: '50%' }
                                }}
                                name="mobileNumber"
                                onBlur={handleOnBlur}
                                label="Input Mobile Number"
                                type="text"
                            /> <br />

                            <TextField
                                sx={{
                                    my: '10px',
                                    width: { xs: '90%', sm: '70%', md: '50%' }
                                }}
                                onBlur={handleOnBlur}
                                multiline
                                rows={2}
                                name="address"
                                label="Your Address"
                                type="text"
                            /> <br />

                            <TextField
                                sx={{
                                    my: '10px',
                                    width: { xs: '90%', sm: '70%', md: '50%' }
                                }}
                                name="status"
                                onBlur={handleOnBlur}
                                value="pending"
                                type="text"
                            /> <br />

                            <Button type="submit" variant="contained">Confirm Order</Button>

                        </form>}
                        {loading && <CircularProgress />}
                    </Grid>
                </Grid>
            }
            <Footer></Footer>
        </div>
    );
};

export default Purchase;