import React, { useState, useEffect } from 'react';
import styles from './styles';
import Button from '../button/button';
import useAuth from '../../hooks/useAuth';
import {useNavigate} from 'react-router-dom';
import TruncatedText from '../../components/truncatedText/truncatedText';
import BookingModal from '../../components/bookingModal/bookingModal';
import githubIcon from '../../assets/images/github-icon.svg';
import linkedInIcon from '../../assets/images/linkedIn-icon.svg';

// Material UI
import StarIcon from '@mui/icons-material/Star';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const TutorCard = ({ tutor, showDescription = true, showProfiles = true, showViewButton = true, fetchTutors}) => {
    const classes = styles();
    const auth = useAuth();
    const navigate = useNavigate();
    const [showBookingModal, setShowBookingModal] = useState(false);

    const handleNavigation = ()=>{
        navigate(`/tutors/${tutor._id}`);
    }

    const handleBook = ()=>{
        setShowBookingModal(true); 
    }
    
    const handleCloseBookinModal = ()=>{
        setShowBookingModal(false); 
    }

    return (
        <div className={classes.tutorCard}>
            <div className={classes.tutorCardContent}>
                <div className={classes.tutorCardImage}>
                    <img src={tutor.user.profile_picture} alt={tutor?.user.first_name} />
                </div>
                <div className={classes.tutorCardInfo}>
                    <h3>{tutor?.user.first_name} {tutor?.user.last_name}</h3>
                    <p>{tutor?.title}</p>
                    <div className={classes.tutorCardInfoStat}><StarIcon/> {tutor.average.toFixed(1)} </div>
                    <div className={classes.tutorCardInfoStat}><ArticleOutlinedIcon/> {tutor.reviews.length} reviews</div>
                    <div className={classes.tutorCardInfoStat}><PaymentsOutlinedIcon/> {tutor.hourly_rate} coins/hour.</div>
                    {showDescription && 
                        <TruncatedText lines={2}>
                            <p className={classes.tutorCardInfoBio}>
                                {tutor.description}
                            </p>
                        </TruncatedText>
                    }
                    {showProfiles && <div className={classes.tutorCardInfoProfiles}>
                        {tutor.user.github_url && <a href={tutor.user.github_url} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Github"/></a>}
                        {tutor.user.linkedin_url && <a href={tutor.user.linkedin_url} target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="LinkedIn"/></a>}
                    </div>}
                </div>
            </div>
            <div className={classes.tutorCardButtons}>
                {showViewButton && <Button rounded outlined onClick={handleNavigation}>View</Button>}
                <Button onClick={handleBook} rounded>Book</Button>
            </div>
            <BookingModal tutor={tutor} open={showBookingModal} onClose={handleCloseBookinModal} fetchTutors={fetchTutors}/>
        </div>
    );
}

export default TutorCard;