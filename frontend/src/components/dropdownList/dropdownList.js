import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './styles';

// Material-UI
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LogoutIcon from '@mui/icons-material/Logout';

const Dropdown = ({open}) => {
    const auth = useAuth();
    const classes = styles();

    return (
        open?
        <ul className={classes.list}>
            <li className={classes.subItem}>
              <PersonIcon className={classes.icon} />
              <p>Profile</p>
            </li>
            <li className={classes.subItem}>
              <CreditCardIcon className={classes.icon} />
              <p>Add Balance</p>
            </li>
            <li className={classes.subItem} onClick={auth.logout}>
              <LogoutIcon className={classes.icon} />
              <p>Logout</p>
            </li>
        </ul>
        :null
    )
}

export default Dropdown;