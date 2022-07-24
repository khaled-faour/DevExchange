import React, { useState, useEffect } from 'react';
import styles from './styles';
import {useParams} from 'react-router-dom';
import TutorCard from '../../components/tutorCard/tutorCard';
import TruncatedText from '../../components/truncatedText/truncatedText';
import axios from 'axios';

const TutorView = () => {
    const classes = styles();
    const {id} = useParams();
    const [tutor, setTutor] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get(`/tutorDetails/${id}`).then(res=>{
            setTutor(res.data);
            setIsLoading(false);
        })
    }, []);

    return (
        isLoading ? <div>Loading...</div> :
        <div className={classes.container}>
            {/* Tutor Details */}
            <TutorCard tutor={tutor} showDescription={false} showViewButton={false}/>

            {/* Tutor About */}
            <div className={classes.about}>
                <div className={classes.aboutTitle}>About</div>
                <TruncatedText lines={2}>
                    <div className={classes.aboutDescription}>{tutor.description}</div>
                </TruncatedText>
            </div>
        </div>
    )
}

export default TutorView;