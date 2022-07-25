import React from 'react';
import styles from './styles';

const Button = ({ 
    children, 
    onClick, 
    outlined = false , 
    fullWidth = false, 
    rounded=false, 
    leftIcon,
    rightIcon,
    disabled = false
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
            disabled={disabled}
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