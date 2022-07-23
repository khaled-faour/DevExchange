import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo-white.png';
import useAuth from '../../hooks/useAuth';
import Avatar from '../avatar/avatar';
import styles from './styles';

// Material UI
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Dropdown from '../dropdownList/dropdownList';
const Navbar = () => {
    const classes = styles();
    const navigate = useNavigate();
    const auth = useAuth();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }
    return (
        <>
        <div><Dropdown open={dropdownOpen}/></div>
        <nav className={classes.nav}>
            {/* Logo */}
            <div className={classes.logo}>
                <img src={logo} onClick={()=>navigate('/')}/>
            </div>


            {/* Nav Links */}
            <ul className={classes.links}>
                <li>
                    <a onClick={()=>navigate('/questions')}>Questions</a>
                </li>
                <li>
                    <a onClick={()=>navigate('/tutors')}>Tutors</a>
                </li>
            </ul>

            {/* Avatar */}
            <div className={classes.rightMenu} onClick={toggleDropdown}>
                <div className={classes.balance}><AccountBalanceWalletIcon />: {auth.user.balance}</div>
                <div className={classes.avatar}><Avatar  user={auth.user} /><ArrowDropDownIcon /></div>
            </div>

        </nav>
    </>
    )
}

export default Navbar;