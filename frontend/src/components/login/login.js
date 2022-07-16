import React, { useState, useEffect } from 'react';
import Input from '../../components/input/input';
import styles from './styles';
import Button from '../button/button';
import googleImage from '../../assets/images/Google.svg';
import githubImage from '../../assets/images/Github.svg';
import axios from 'axios';

// Material UI
import Divider from '@mui/material/Divider';



const Login = ()=>{
    const classes = styles();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const onChange = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = (e)=>{
        axios.post('/auth/login', credentials)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const googleLogin = ()=>{
        window.location.href = 'http://localhost:4001/api/auth/google'
    }

    const githubLogin = ()=>{
        window.location.href = 'http://localhost:4001/api/auth/github'
    }

    useEffect(()=>{
        console.log(credentials);
    }
    ,[credentials])
    return (
        <div className={classes.container}>


            {/* Login By Email and Password */}
            <Input name="email" type="text" placeholder="Email" onChange={onChange}/>
            <Input name= "password" type="password" placeholder="Password" onChange={onChange}/>
            <Button onClick={onSubmit} fullWidth>Login</Button>

            {/* <hr className={classes.hr}></hr> */}
            <Divider className={classes.divider}>or</Divider>

            {/* Login With Google */}
            <img className={classes.socialButton} src={googleImage} alt="google" height={45} onClick={googleLogin}/>

            {/* Login With Github */}
            <img className={classes.socialButton} src={githubImage} alt="github" height={45} onClick={githubLogin}/>

        </div>
        
    )
}

export default Login;