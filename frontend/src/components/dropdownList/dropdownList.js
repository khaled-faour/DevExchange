import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './styles';

const Dropdown = ({open}) => {
    const auth = useAuth();
    const classes = styles();

    return (
        open?
        <ul className={classes.list}>
            <li className={classes.subItem}>
              <p>Profile</p>
            </li>
            <li className={classes.subItem}>
              <p>Add Balance</p>
            </li>
            <li className={classes.subItem} onClick={auth.logout}>
              <p>Logout</p>
            </li>
        </ul>
        :null
    )
}

export default Dropdown;