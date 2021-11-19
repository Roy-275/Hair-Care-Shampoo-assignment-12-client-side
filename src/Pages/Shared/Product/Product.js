import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { productName, description, price, imageUrl, _id } = props.product;
    return (
        <Grid item xs={6} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt="shampoo item"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="h6" color="text.main">
                            Price: {price}$
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link style={{
                        textDecoration: 'none',
                    }} to={`/products/${_id}`}>
                        <Button variant="contained" size="small" color="primary">
                            Buy Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default Product;