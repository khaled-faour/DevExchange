import React, { useState, useEffect } from 'react';
import logo from "../../images/logo-symbol-black.png"
import styles from './styles';
import Button from '../../components/button/button';



const Home = () => {
    const classes = styles();
    return (
        <div>
            <header className={classes.header}>
                <a href='.'><img src={logo} alt="logo" height={70}/></a>
                <ul className={classes.links}>
                    <li><button onClick={()=>console.log("button")} href='#'>How it works</button></li>
                    <li><button onClick={()=>console.log("button")} href='#'>FAQ</button></li>
                    <li><button onClick={()=>console.log("button")} href='#'>Become a Tutor</button></li>
                </ul>
                <Button/>
            </header>
        </div>
    )
}

export default Home;