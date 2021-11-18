import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

const Product = () => {
    return (
        <Grid item xs={6} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="https://www.free-mockup.com/wp-content/uploads/edd/2019/04/Free-Shampoo-Bottle-Mockup.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Price: 200 $
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" color="primary">
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default Product;