import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const url = `http://localhost:5000/allorders`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleCancel = id => {
        const proceed = window.confirm('Are You Sure, You want to cancel order?');
        if (proceed) {
            const singleOrderUrl = `http://localhost:5000/allorders/${id}`;
            fetch(singleOrderUrl, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);

                    }
                })
        }
    };
    return (
        <div>
            {
                orders.map(order => <div style={{ background: '#F9E79F', padding: '15px' }}>
                    <Typography sx={{ fontWeight: 'bold', color: 'purple' }} gutterBottom variant="h5" component="div">
                        {order.productName} <Button onClick={() => handleCancel(order._id)} variant="contained" sx={{ background: 'red', color: 'white', borderRadius: '5px' }}>Cancel</Button> &nbsp;
                        <Button onClick={() => handleCancel(order._id)} variant="contained" sx={{ color: 'white', borderRadius: '5px' }}>Update</Button>
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Ordered By: {order.name}
                    </Typography>
                    <Typography variant="h6">
                        Status: {order.status}
                    </Typography>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;