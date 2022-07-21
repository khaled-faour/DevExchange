import React, { useState, useEffect } from 'react';
import styles from './styles';
import {useParams} from 'react-router-dom';
import Post from '../../components/post/post';
import axios from 'axios';


const QuestionView = (props) => {
    const classes = styles();
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/posts/${id}`).then(res => {
            setPost(res.data);
            setLoading(false);
            console.log(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [id]);

    return (
        loading ? "Loading" : 
        <div className={classes.questions}>
            <Post post={post} />
            {post.answers
            .sort((a, b) => a.createdAt - b.createdAt)
            .map(answer => (
                <Post key={answer.id} post={answer} />
            ))}
        </div>
    );
}
export default QuestionView;
