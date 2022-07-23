import React, { useState, useEffect } from 'react';
import styles from './styles';
import {useParams} from 'react-router-dom';
import Post from '../../components/post/post';
import axios from 'axios';
import AddAnswer from '../../components/addAnswer/addAnswer';
import useAuth from '../../hooks/useAuth';

const QuestionView = (props) => {
    const classes = styles();
    const auth = useAuth();
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [addAnswerOpen, setAddAnswerOpen] = useState(false);

    useEffect(() => {
        axios.get(`/posts/${id}`).then(res => {
            setPost(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        })
    }, [id]);

    useEffect(() => {
        console.log("can answer: ", (post?.answers?.find(answer=>answer.user._id === auth.user._id) === undefined))
        console.log("found: ", post?.answers?.find(answer=>answer.user._id === auth.user._id))
        setAddAnswerOpen((post?.answers?.find(answer=>answer.user._id === auth.user._id) === undefined))
    }, [post]);

    return (
        loading ? "Loading" : 
        <div className={classes.questions}>
            <Post post={post} />
            {post.answers
            .sort((a, b) => a.createdAt - b.createdAt)
            .map(answer => (
                <Post key={answer.id} post={answer} />
            ))}

            {addAnswerOpen && <AddAnswer />}
        </div>
    );
}
export default QuestionView;
