import React, { useState, useEffect } from 'react';
import styles from './styles';

const Button = ({ children, onClick, outlined = false , fullWidth = false, rounded=false}) => {
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
            {children}
        </button>
    );
}

export default Button;