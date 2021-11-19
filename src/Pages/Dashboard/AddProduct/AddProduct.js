import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [productData, setProductData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...productData };
        newLoginData[field] = value;
        setProductData(newLoginData);
    }

    const handleAddProduct = e => {
        setIsLoading(true);

        // collect data
        const product = {
            ...productData
        }

        // send to the server
        fetch('https://salty-castle-47258.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
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
                Add a product here
            </Typography>

            {addSuccess && <Alert severity="success">Product Added Successfully</Alert>}

            {isLoading && <CircularProgress />}

            {!isLoading && <form onSubmit={handleAddProduct}>
                <TextField
                    sx={{
                        my: '10px',
                        width: { xs: '90%', sm: '70%', md: '50%' }
                    }}
                    onBlur={handleOnBlur}
                    name="productName"
                    label="Product Name"
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
                    name="description"
                    label="Product Short Details"
                    type="text"
                /> <br />

                <TextField
                    sx={{
                        my: '10px',
                        width: { xs: '90%', sm: '70%', md: '50%' }
                    }}
                    onBlur={handleOnBlur}
                    name="price"
                    label="Product Price"
                    type="number"
                /> <br />

                <TextField
                    sx={{
                        my: '10px',
                        width: { xs: '90%', sm: '70%', md: '50%' }
                    }}
                    onBlur={handleOnBlur}
                    name="imageUrl"
                    label="Image URL"
                    type="text"
                /> <br />

                <Button type="submit" variant="contained">Add Product</Button>

            </form>}

        </div>
    );
};

export default AddProduct;