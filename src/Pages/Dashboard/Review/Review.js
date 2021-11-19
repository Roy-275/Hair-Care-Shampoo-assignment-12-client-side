import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Review = () => {
    const [reviewData, setReviewData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...reviewData };
        newLoginData[field] = value;
        setReviewData(newLoginData);
    }

    const handleReview = e => {
        setIsLoading(true);

        // collect data
        const review = {
            ...reviewData
        }

        // send to the server
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddSuccess(true);
                }
            })
            .finally(() => setIsLoading(false));


        e.preventDefault();
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: '#5f5df5', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                Please give us a review
            </Typography>

            {addSuccess && <Alert severity="success">Thank You for your review</Alert>}

            {isLoading && <CircularProgress />}

            {!isLoading && <form onSubmit={handleReview}>

                <TextField
                    sx={{
                        my: '10px',
                        width: { xs: '90%', sm: '70%', md: '50%' }
                    }}
                    onBlur={handleOnBlur}
                    name="name"
                    label="Your Name"
                    type="text"
                /> <br />

                <TextField
                    sx={{
                        my: '10px',
                        width: { xs: '90%', sm: '70%', md: '50%' }
                    }}
                    onBlur={handleOnBlur}
                    multiline
                    rows={4}
                    name="feedback"
                    label="Say something about our shop"
                    type="text"
                /> <br />

                <TextField
                    sx={{
                        my: '10px',
                        width: { xs: '90%', sm: '70%', md: '50%' }
                    }}
                    onBlur={handleOnBlur}
                    name="rating"
                    label="Rate us"
                    type="number"
                /> <br />

                <Button type="submit" variant="contained">Review</Button>

            </form>}

        </div>
    );
};

export default Review;