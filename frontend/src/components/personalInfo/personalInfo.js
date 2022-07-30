import React, { useState, useEffect, useRef } from 'react';
import styles from './styles';
import Input from '../input/input';
import Button from '../button/button';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


// Material UI
import {Grid} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Alert from '@mui/material/Alert';

const PersonalInfo = ({user}) => {
    const classes = styles();
    const auth = useAuth();
    const imageRef = useRef(null);
    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        linkedin_url: '',
        github_url: '',
        profile_picture: ''
    });

    const [messageInfo, setMessageInfo] = useState({
        open: false,
        message: '',
        type: 'success'
    });

    useEffect(() => {
        if (user) {
            setUserInfo({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                linkedin_url: user.linkedin_url,
                github_url: user.github_url,
                profile_picture: user.profile_picture
            });
        }
    }, [user]);

    useEffect(()=>{
        console.log(userInfo)
    }, [userInfo]);
    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }

    const handlePictureChange = (e) => {
        console.log("picture change");
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log("Picture: ", reader.result);
            setUserInfo({
                ...userInfo,
                profile_picture: reader.result
            });
        }
    }

    const handleImageClick = () => {
        imageRef.current.click();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/users/${user._id}`, userInfo).then(res => {
            setMessageInfo({
                open: true,
                message: "Profile updated successfully",
                type: "success"
            })
            auth.verify()
            // setUserInfo(res.data);
        }
        ).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className={styles.personalInfo}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {messageInfo.open && <Alert severity={messageInfo.type}>{messageInfo.message}</Alert>}
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.imageContainer}>
                                <button onClick={handleImageClick} type="input" className={classes.imageButton} style={{backgroundImage: `Url(${userInfo.profile_picture})`}}>
                                    <FileUploadIcon/><p>Upload</p>
                                </button>
                                <input ref={imageRef} type="file" className={classes.imageInput} onChange={handlePictureChange}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input label="First name" name={'first_name'} placeholder="First name" value={userInfo.first_name} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input label="Last name" name={'last_name'} placeholder="Last name" value={userInfo.last_name} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Input label="Email" name={'email'} placeholder="Email" value={userInfo.email} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input label="LinkedIn" name={'linkedin_url'} placeholder="LinkedIn url" value={userInfo.linkedin_url} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input label="Github" name={'github_url'} placeholder="Github url" value={userInfo.github_url} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="column" spacing={3} alignItems='flex-end'>
                                <Grid item xs={12}>
                                    <Button onClick={handleSubmit} rounded>Save</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PersonalInfo;
