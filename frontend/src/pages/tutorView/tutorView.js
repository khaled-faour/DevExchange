import React, { useState, useEffect } from 'react';
import styles from './styles';
import {useParams} from 'react-router-dom';
import TutorCard from '../../components/tutorCard/tutorCard';
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
        </div>
    )
}

export default TutorView;