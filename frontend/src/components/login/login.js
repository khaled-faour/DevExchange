import React, { useState, useEffect } from 'react';
import Input from '../../components/input/input';
import styles from './styles';
import Button from '../button/button';
import googleImage from '../../assets/images/Google.svg';
import githubImage from '../../assets/images/Github.svg';

// Material UI
import Divider from '@mui/material/Divider';



const Login = ()=>{
    const classes = styles();
    return (
        <div className={classes.container}>


            {/* Login By Email and Password */}
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button fullWidth>Login</Button>

            {/* <hr className={classes.hr}></hr> */}
            <Divider className={classes.divider}>or</Divider>

            {/* Login With Google */}
            <img className={classes.socialButton} src={googleImage} alt="google" height={45}/>

            {/* Login With Github */}
            <img className={classes.socialButton} src={githubImage} alt="github" height={45}/>

        </div>
        
    )
}

export default Login;