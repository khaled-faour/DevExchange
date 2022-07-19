import React, { useState, useEffect } from 'react';
import styles from './styles';
import AddIcon from '@mui/icons-material/Add';

const Button = ({ 
    children, 
    onClick, 
    outlined = false , 
    fullWidth = false, 
    rounded=false, 
    leftIcon,
    rightIcon
}) => {
    const classes = styles();
    return (
        <button
            className={[
                outlined? classes.outlinedButton : classes.button, 
                fullWidth? classes.fullWidth : '', 
                rounded? classes.rounded : ''
            ].join(' ')}
            onClick={onClick}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >   
            {leftIcon ?? null}
            {children}
            {rightIcon ?? null}
            
        </button>
    );
}

export default Button;