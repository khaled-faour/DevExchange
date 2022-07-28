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
    const [addAnswerOpen, setAddAnswerOpen] = useState(true);

    const fetchPosts = () => {
        axios.get(`/posts/${id}`).then(res => {
            setPost(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchPosts();
    }, [id]);

    useEffect(() => {
        let userAnswer = post?.answers?.find(answer=>answer.user._id === auth.user._id) === undefined;
        let isUserQuestion = post?.user?._id === auth.user._id;
        if(!userAnswer || isUserQuestion){
            setAddAnswerOpen(false);
        }
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

            <AddAnswer fetchPosts={fetchPosts}/>
            {/* {addAnswerOpen && <AddAnswer fetchPosts={fetchPosts}/>} */}
        </div>
    );
}
export default QuestionView;
