import React, { useState, useEffect } from 'react';
import QuestionTile from '../../components/questionTile/questionTile';
import axios from 'axios';
import styles from './styles';

const Questions = () => {
    const classes = styles();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('/posts/questions');
                setQuestions(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Questions</h1>
            <div className={classes.questions}>
                {questions.map(question => (
                    <QuestionTile key={question._id} {...question} id={question._id} />
                ))}
            </div>
        </div>
    );
}

export default Questions;