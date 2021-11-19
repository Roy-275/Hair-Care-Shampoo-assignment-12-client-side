import { Card, CardActionArea, CardContent, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div style={{ textAlign: 'center', paddingTop: '5px', paddingBottom: '15px', paddingLeft: '50px', paddingRight: '50px', background: 'goldenrod' }}>
            <Typography variant="h4" sx={{ color: 'green', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                Customer's Feedback
            </Typography>
            {
                reviews.map(review => <div>
                    <Grid item xs={6} sm={4} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography sx={{ fontWeight: 'bold', color: 'purple' }} gutterBottom variant="h5" component="div">
                                        {review.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {review.feedback}
                                    </Typography>
                                    <Typography variant="h4" sx={{ color: 'green' }}>
                                        <Rating name="read-only" value={review.rating} readOnly />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </div>)
            }
        </div>
    );
};

export default Reviews;