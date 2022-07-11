import React, { useState, useEffect } from 'react';
import styles from './styles';

const Button = ({ children, onClick }) => {
    const classes = styles();
    return (
        <button
        className={classes.button}
            onClick={onClick}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            Login/Sign up
        </button>
    );
}

export default Button;