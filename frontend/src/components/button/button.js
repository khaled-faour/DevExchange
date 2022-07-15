import React, { useState, useEffect } from 'react';
import styles from './styles';

const Button = ({ children, onClick, outlined = false }) => {
    const classes = styles();
    return (
        <button
        className={outlined? classes.outlinedButton : classes.button}
            onClick={onClick}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
}

export default Button;