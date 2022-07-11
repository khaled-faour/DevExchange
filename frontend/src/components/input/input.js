import React, { useState, useEffect } from 'react';
import styles from './styles';

const Input = ({ onChange, value, placeholder, type, name, error, label}) => {
    const classes = styles();

    return (
        <div className={classes.inputContainer}>
            
            {label && <label>{label}</label>}
            <input className={classes.input}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                type={type}
                name={name}
            />
            {error && <span className='error'>{error}</span>}

        </div>
    );
}

export default Input;