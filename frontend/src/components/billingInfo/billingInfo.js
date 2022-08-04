import React from 'react';
import Input from '../input/input';

// Material UI
import {Grid} from '@mui/material'


const BillingInfo = ({handleChange}) => {
    return (
        <Grid container spacing={3} md={6}>
            <Grid item xs={12}>
                <Input name="card_number" placeholder="Card number" onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Input name="first_name" placeholder="First name" onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Input name="last_name" placeholder="Last name" onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={2}>
                <Input name="card_expiry_month" placeholder="MM" onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
                <Input name="card_expiry_year" placeholder="YYYY" onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Input name="card_cvv" placeholder="CVV" onChange={handleChange} />
            </Grid>
        </Grid>
    )
}

export default BillingInfo;