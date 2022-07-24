import React, { useState, useEffect } from 'react';
import styles from './styles';
import TutorCard from '../../components/tutorCard/tutorCard';
import axios from 'axios';

const Tutors = () => {
    const classes = styles();
    const [tutors, setTutors] = useState([]);
    useEffect(() => {
        axios.get('/tutorDetails')
        .then(res => {
            console.log("Tutors: ", res.data)
            setTutors(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className={classes.container}>
            {tutors.map(tutor => {
                return <TutorCard key={tutor.id} tutor={tutor} />
            })}
            
        </div>
    )
}

export default Tutors;