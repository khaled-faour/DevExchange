import React from 'react';
import styles from './style';
import BundleCard from '../bundleCard/bundleCard';


// Material UI
import {Grid} from '@mui/material';
const BundleSelect = ({bundles, handleSelect, selected}) => {
    const classes = styles();
    
    return (
        <Grid container spacing={3}>
            {bundles.map((bundle, index)=>
                    <BundleCard 
                        key={index} 
                        bundle={bundle} 
                        selected={selected === bundle._id}
                        onClick={()=>handleSelect(bundle._id)}
                    />
            )}
        </Grid>
    )
}

export default BundleSelect;