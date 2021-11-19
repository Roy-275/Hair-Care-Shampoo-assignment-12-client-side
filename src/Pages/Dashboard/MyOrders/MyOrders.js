import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const url = `https://salty-castle-47258.herokuapp.com/orders?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [url])

    const handleCancel = id => {
        const proceed = window.confirm('Are You Sure, You want to cancel order?');
        if (proceed) {
            const singleOrderUrl = `https://salty-castle-47258.herokuapp.com/orders/${id}`;
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
            <Typography variant="h4" sx={{ color: '#5f5df5', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                My Orders
            </Typography>
            {
                orders.map(order => <div key={order._id} style={{ background: '#F9E79F', padding: '15px' }}>
                    <Typography sx={{ fontWeight: 'bold', color: 'purple' }} gutterBottom variant="h5" component="div">
                        {order.productName} <Button onClick={() => handleCancel(order._id)} variant="contained" sx={{ background: 'red', color: 'white', borderRadius: '5px' }}>Cancel</Button>
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

export default MyOrders;