import React, { useState, useEffect } from 'react';
import Input from '../../components/input/input';
import styles from './styles';
import Button from '../button/button';
import googleImage from '../../assets/images/Google.svg';
import githubImage from '../../assets/images/Github.svg';
import axios from 'axios';

// Material UI
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';




const Login = ()=>{
    const classes = styles();
    const [isSignup, setIsSignup] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [credentials, setCredentials] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const onChange = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e)=>{
        setIsSubmitting(true);
        if(isSignup){
            axios.post('/auth/register', credentials)
            .then(res=>{
                setCredentials({})
                setIsSignup(false)
                setSignupSuccess(true);
            })
            .catch(err=>{
                console.log(err);
                setIsSubmitting(false);
            })
        }else{
            axios.post('/auth/login', credentials)
            .then(res=>{
                window.location.reload();
            })
            .catch(err=>{
                console.log(err);
                setIsSubmitting(false);
            })
        }
        
    }

    const googleLogin = ()=>{
        window.location.href = 'http://localhost:4001/api/auth/google'
    }

    const githubLogin = ()=>{
        window.location.href = 'http://localhost:4001/api/auth/github'
    }

    return (
        <div className={classes.container}>

            <span className={classes.title}>{isSignup ?  'Signup' : 'Login'}</span>

            {signupSuccess && <Alert className={classes.alert} severity="success" >Signup Success</Alert>}

            {/* Login By Email and Password */}
            {isSignup && <Input name="first_name" value={credentials.first_name} type="text" placeholder="First name" onChange={onChange}/>}
            {isSignup && <Input name="last_name"  value={credentials.last_name} type="text" placeholder="Last name" onChange={onChange}/>}
            <Input name="email" value={credentials.email} type="text" placeholder="Email" onChange={onChange} disabled={isSubmitting}/>
            <Input name= "password" value={credentials.password} type="password" placeholder="Password" onChange={onChange} disabled={isSubmitting}/>
            <Button onClick={onSubmit} fullWidth>
                {
                isSubmitting? <CircularProgress size={12} style={{color: 'white'}}/> : 
                    isSignup ? 'Signup' : 'Log in'
                }
            </Button>

            {/* <hr className={classes.hr}></hr> */}
            <Divider className={classes.divider}>or</Divider>

            {/* Login With Google */}
            <img className={classes.socialButton} src={googleImage} alt="google" height={45} onClick={googleLogin}/>

            {/* Login With Github */}
            <img className={classes.socialButton} src={githubImage} alt="github" height={45} onClick={githubLogin}/>

            {/* Signup */}
            <span className={classes.footer} onClick={()=>setIsSignup(!isSignup)}>{isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Signup'}</span>
        </div>
        
    )
}

export default Login;