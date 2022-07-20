import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

const Container = ({children}) => {
    return (
        <Grid container justifyContent='center'>
            <Grid item xs={12} md={10} xl={8}>
                {children}
            </Grid>
        </Grid>
    )
}

export default Container;