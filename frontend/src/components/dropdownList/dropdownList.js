import React from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './styles';
import { useNavigate } from "react-router-dom";


// Material-UI
import {Person as PersonIcon, CreditCard as CreditCardIcon, Logout as LogoutIcon} from '@mui/icons-material';

const Dropdown = ({open}) => {
    const auth = useAuth();
    const classes = styles();
    const navigate = useNavigate();

    return (
        open?
        <ul className={classes.list}>
            <li className={classes.subItem} onClick={()=>navigate('profile')}>
              <PersonIcon className={classes.icon} />
              <p>Profile</p>
            </li>
            <li className={classes.subItem} onClick={()=>navigate('bundles')}>
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