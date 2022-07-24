import React, { useState, useEffect } from 'react';
import styles from './styles';
import Button from '../button/button';
import useAuth from '../../hooks/useAuth';
import {useNavigate} from 'react-router-dom';

// Material UI
import StarIcon from '@mui/icons-material/Star';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const TutorCard = ({ tutor }) => {
    const classes = styles();
    const auth = useAuth();
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate(`/tutors/${tutor._id}`);
    }

    return (
        <div className={classes.tutorCard}>
            <div className={classes.tutorCardContent}>
                <div className={classes.tutorCardImage}>
                    <img src={auth.user.profile_picture} alt={tutor?.user.first_name} />
                </div>
                <div className={classes.tutorCardInfo}>
                    <h3>{tutor?.user.first_name} {tutor?.user.last_name}</h3>
                    <p>{tutor?.title}</p>
                    <div className={classes.tutorCardInfoStat}><StarIcon/> {tutor.average.toFixed(1)} </div>
                    <div className={classes.tutorCardInfoStat}><ArticleOutlinedIcon/> {tutor.reviews.length} reviews</div>
                    <div className={classes.tutorCardInfoStat}><PaymentsOutlinedIcon/> {tutor.hourly_rate} coins/hour.</div>
                    <p className={classes.tutorCardInfoBio}>{tutor.description}</p>
                </div>
            </div>
            <div className={classes.tutorCardButtons}>
                <Button rounded outlined onClick={handleNavigation}>View</Button>
                <Button rounded>Book</Button>
            </div>
        </div>
    );
}

export default TutorCard;