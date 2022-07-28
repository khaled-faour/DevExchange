import React, { useState, useEffect } from 'react';
import TutorCard from '../tutorCard/tutorCard';
import axios from 'axios';
import styles from './styles';

const TopRatedTutors = () => {
    const classes = styles();
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/tutorDetails')
            .then(res => {
                setTutors(res.data);
                setLoading(false);
            }).catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
            <h1>Top rated tutors</h1>
            <div className={classes.container}>
                {tutors.map(tutor => (
                    <TutorCard key={tutor.id} tutor={tutor} />
                ))}
            </div>
        </>
    );
}

export default TopRatedTutors;