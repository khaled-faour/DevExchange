import React, { useState, useEffect } from 'react';
import styles from './styles';
import Avatar from '../../components/avatar/avatar';
import UserCard from '../../components/userCard/userCards';
import Comment from '../../components/comment/comment';
import Button from '../../components/button/button';
import useAuth from '../../hooks/useAuth';
import colors from '../../assets/styles/colors';
import Editor from '../../components/richTextEditor/richTextEdit';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

// Material UI
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditIcon from '@mui/icons-material/Edit';

const Post = (props)=>{
    const auth = useAuth();
    const classes = styles();
    const [post, setPost] = useState(props.post);
    const [postContent, setPostContent] = useState(props.post.content);
    const [readOnlyPost, setReadOnlyPost] = useState(true);
    const [commentBox, setCommentBox] = useState(false);
    const [comment, setComment] = useState('');
    const [commentsLimit, setCommentsLimit] = useState(3);

    const handleVote = (type)=>{
        axios.post(`/votes`, {post_id: post._id, type})
        .then(res=>{
            if(res.status !== 401){
                fetchPost()
            }
        }).catch(err=>{
            console.log(err);
        });
    }

    const handleAddComment = ()=>{
        setCommentBox(!commentBox);
    }

    const handleCommentChange = (e)=>{
        setComment(e.target.value);
    }

    const handleSubmitComment = ()=>{
        if(comment.length > 0){
            axios.post(`/comments`, {post_id: post._id, content: comment})
            .then(res=>{
                setComment('');
                setCommentBox(false);
                setPost({
                    ...post,
                    comments: [...post.comments, res.data]
                })
                toast.success('Comment added successfully');
                // setCommentsList([...commentsList, res.data]);
            }).catch(err=>{
                toast.error('Error adding comment');
            })
        }
    }

    const handleCommentsLimit = () =>{
        let newLimit = post.comments.length - commentsLimit > 3 ? commentsLimit + 3 : commentsLimit + post.comments.length - commentsLimit;
        setCommentsLimit(newLimit);
    }

    const handleEditPost = (e)=>{
        setReadOnlyPost(!readOnlyPost);
    }

    const handleEditChange = (e)=>{
        setPostContent(e);
    }

    const handleEditSubmit = (e)=>{
        e.preventDefault();
        axios.put(`/posts/${post._id}`, {content: postContent})
        .then(res=>{
            toast.success('Post updated successfully');
            handleEditPost()
            fetchPost();
        }).catch(err=>{
            toast.error(err.response.data);
        })
    }

    const fetchPost = ()=>{
        axios.get(`/posts/${post._id}`).then(res=>{
            setPost(res.data);
        })
    }
    useEffect(()=>{
        fetchPost()
    }, [])
    return(
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div className={classes.voting}>
                    <div className={classes.voteButton}>
                        <ArrowDropUpIcon style={{color: post.up_votes.find(vote=>vote.user._id === auth.user._id) ? colors.primary : 'black'}} onClick={()=>handleVote('up')}/>
                    </div>
                    <div className={classes.voteNumber}>
                        {post.up_votes?.length-post.down_votes?.length}
                    </div>
                    <div className={classes.voteButton}>
                        <ArrowDropDownIcon style={{color: post.down_votes.find(vote=>vote.user._id === auth.user._id) ? colors.primary : 'black'}} onClick={()=>handleVote('down')}/>
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <h3 className={classes.title}>{post.title ?? " "}</h3>
                        {post.user._id === auth.user._id && readOnlyPost && <EditIcon onClick = {handleEditPost}/>}
                    </div>
                    <div className={classes.editor}>
                        <Editor value={post.content} readOnly={readOnlyPost} onChange={handleEditChange}/>
                        {!readOnlyPost && <div className={classes.editButtons}>
                            <Button rounded outlined onClick={handleEditPost}>Cancel</Button>
                            <Button rounded onClick={handleEditSubmit}>Save</Button>
                        </div>}
                    </div>
                </div>
            </div>
            <div className={classes.userCardContainer}>
                <div className={classes.details}>
                    <div>Asked at <span>{new Date(post.createdAt).toLocaleString()}</span></div>
                    <UserCard user={post.user}/>
                </div>
            </div>
            <hr/>
            {post.comments.filter((item, idx) => idx < commentsLimit).map((comment, index)=>{
                return(
                    <div key={index} className={classes.comments}>
                        <Comment comment={comment}/>
                    </div>
                )
            })}
            {
                post.comments.length - commentsLimit > 0 && 
                <div className={classes.moreComments}>
                    <a onClick={handleCommentsLimit}>
                        Load more(
                            {post.comments.length - commentsLimit > 3 ? 3 : post.comments.length - commentsLimit}
                        )
                    </a>
                </div>
            }
            {!commentBox ? 
            <div className={classes.addCommentButtonContainer}>
                <a className={classes.showCommentBoxButton} onClick={handleAddComment}>Add comment</a>
            </div>
            : 
            <div className={classes.addComment}>
                <textarea className={classes.commentBox} value={comment} onChange={handleCommentChange} placeholder="Add a comment..."></textarea>
                <div className={classes.buttons}>
                    <Button rounded onClick={handleSubmitComment}>Add</Button>
                    <Button rounded outlined onClick={handleAddComment}>Cancel</Button>
                </div>
            </div>
            }
            <ToastContainer hideProgressBar/>
        </div>
    )
}

export default Post;