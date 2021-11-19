import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const url = `http://localhost:5000/products`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure, You want to cancel order?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);

                    }
                })
        }
    };

    return (
        <div>
            {
                products.map(product => <div style={{ background: '#F9E79F', padding: '15px' }}>
                    <Typography sx={{ fontWeight: 'bold', color: 'purple' }} gutterBottom variant="h5" component="div">
                        {product.productName} <Button onClick={() => handleDelete(product._id)} variant="contained" sx={{ background: 'red', color: 'white', borderRadius: '5px' }}>Delete Product</Button>
                    </Typography>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;