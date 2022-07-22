import React, { useState, useEffect } from 'react';
import styles from './styles';
import Avatar from '../../components/avatar/avatar';
import UserCard from '../../components/userCard/userCards';
import Comment from '../../components/comment/comment';
import Button from '../../components/button/button';

// Material UI
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios';


const Post = (props)=>{
    const classes = styles();
    const {_id: id, title, content, user, createdAt, comments} = props.post;
    const [commentBox, setCommentBox] = useState(false);
    const [commentsList, setCommentsList] = useState([...comments]);
    const [comment, setComment] = useState('');

    const handleVote = (type)=>{
        console.log(type);
    }

    const handleAddComment = ()=>{
        setCommentBox(!commentBox);
    }

    const handleCommentChange = (e)=>{
        setComment(e.target.value);
    }

    const handleSubmitComment = ()=>{
        if(comment.length > 0){
            axios.post(`/comments`, {post_id: id, content: comment})
            .then(res=>{
                setComment('');
                setCommentBox(false);
                setCommentsList([...commentsList, res.data]);
                console.log(res.data);

            }).catch(err=>{
                console.log(err);
            })
        }
    }

    return(
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div className={classes.voting}>
                    <div className={classes.voteButton}>
                        <ArrowDropUpIcon onClick={()=>handleVote('up')}/>
                    </div>
                    <div className={classes.voteNumber}>
                        0
                    </div>
                    <div className={classes.voteButton}>
                        <ArrowDropDownIcon onClick={()=>handleVote('down')}/>
                    </div>
                </div>
                <div className={classes.content}>
                    <h3 className={classes.title}>{title ?? " "}</h3>
                    <p>{content}</p>
                </div>
            </div>

            <div className={classes.details}>
                <div>Asked at <span>{new Date(createdAt).toLocaleString()}</span></div>
                <UserCard user={user}/>
            </div>
            <hr/>
            {commentsList.map((comment, index)=>{
                return(
                    <div key={index} className={classes.comments}>
                        <Comment comment={comment}/>
                    </div>
                )
            })}
            {!commentBox ? 
            <a className={classes.showCommentBoxButton} onClick={handleAddComment}>Add comment</a>
            : 
            <div className={classes.addComment}>
                <textarea className={classes.commentBox} value={comment} onChange={handleCommentChange} placeholder="Add a comment..."></textarea>
                <div className={classes.buttons}>
                    <Button rounded onClick={handleSubmitComment}>Add</Button>
                    <Button rounded outlined onClick={handleAddComment}>Cancel</Button>
                </div>
            </div>
            }
        </div>
    )
}

export default Post;