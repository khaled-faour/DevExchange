import React, { useState, useEffect } from 'react';
import styles from './styles';

const Avatar = ({url}) => {
    const classes = styles();
    return (
        <div className={classes.avatar}>
            <img src={url}/>
        </div>
    );
}
export default Avatar;