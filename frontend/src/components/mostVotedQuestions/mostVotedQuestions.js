import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles';
import QuestionTile from '../questionTile/questionTile';

const MostVotedQuestions = () => {
    const classes = styles();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/posts/questions')
            .then(res => {
                setQuestions(res.data);
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
            <h1>Most voted questions</h1>
            <div className={classes.container}>
                {questions.filter((question, index)=>index<3).map(question => (
                    <QuestionTile key={question._id} {...question} id={question._id} />
                ))}
            </div>
        </>
    );
}

export default MostVotedQuestions;