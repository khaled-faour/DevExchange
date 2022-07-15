import React, { useState, useEffect } from 'react';
import styles from './styles';

const Button = ({ children, onClick, outlined = false , fullWidth = false}) => {
    const classes = styles();
    const classNames = {
        outlined: outlined? classes.outlined : classes.button,
        fullWidth: fullWidth? classes.fullWidth : ''
    }
    return (
        <button
            className={[outlined? classes.outlinedButton : classes.button, fullWidth? classes.fullWidth : ''].join(' ')}
            onClick={onClick}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
}

export default Button;