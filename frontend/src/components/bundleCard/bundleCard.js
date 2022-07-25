import React, { useState, useEffect } from 'react';
import styles from './style';

// Material UI
import { Grid } from '@mui/material';

const BundleCard = ({bundle, selected =false, onClick}) => {
    const classes = styles();

    return (
        <Grid item xs={12} md={6}>
            <div className={classes.container} onClick={onClick}>
                <input className={classes.checkbox} type="radio" name="bundle" checked={selected}/>
                <div className={classes.image}>
                    <img src={bundle.image} />
                </div>
                <div className={classes.info}>
                    <h1>${bundle.price}</h1>
                    <h2>{bundle.amount} coins</h2>
                </div>
            </div>
        </Grid>
    )
}

export default BundleCard;