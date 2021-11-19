import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        setIsLoading(true);
        const user = { email }
        fetch('https://salty-castle-47258.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setAddSuccess(true);
                }
            })
            .finally(() => setIsLoading(false));
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h4" sx={{ color: '#146422', my: '10px', fontWeight: 600 }} gutterBottom component="div">
                Make Admin
            </Typography>

            {addSuccess && <Alert severity="success">Admin Made Successfully</Alert>}

            {isLoading && <CircularProgress />}

            {!isLoading && <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{
                        my: '10px',
                        width: { xs: '90%', sm: '70%', md: '50%' }
                    }}
                    name="email"
                    onBlur={handleOnBlur}
                    label="Email"
                    type="email"
                /> <br />

                <Button type="submit" variant="contained">Submit</Button>

            </form>}
        </div>
    );
};

export default MakeAdmin;