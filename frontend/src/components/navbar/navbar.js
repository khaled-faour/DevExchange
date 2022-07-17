import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo-white.png';
import useAuth from '../../hooks/useAuth';
import Avatar from '../avatar/avatar';
import styles from './styles';

// Material UI
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
    const classes = styles();
    const navigate = useNavigate();
    const auth = useAuth();


    return (
        <nav className={classes.nav}>
            {/* Logo */}
            <div className={classes.logo}>
                <img src={logo} onClick={()=>navigate('/')}/>
            </div>


            {/* Nav Links */}
            <ul className={classes.links}>
                <li>
                    <a href="#">Questions</a>
                </li>
                <li>
                    <a href="#">Tutors</a>
                </li>
            </ul>

            {/* Avatar */}
            <div className={classes.rightMenu}>
                <div className={classes.balance}><AccountBalanceWalletIcon />: {auth.user.balance}</div>
                <div className={classes.avatar}><Avatar url={auth.user.profile_picture || "test"}/><ArrowDropDownIcon /></div>
            </div>

        </nav>
    )
}

export default Navbar;