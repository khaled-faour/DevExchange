import React, { useState, useEffect } from 'react';
import styles from './styles';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../components/button/button';

// Material UI
import EditIcon from '@mui/icons-material/Edit'

const Comment = ({ comment, fetchPost }) => {
    const classes = styles();
    const auth = useAuth();
    const [editMode, setEditMode] = useState(false);
    const [commentContent, setCommentContent] = useState(comment.content);

    const handleEdit = () => {
        setEditMode(!editMode);
    }

    const handleChange = (e) => {
        setCommentContent(e.target.value);
    }

    const handleSubmit = () => {
        axios.put(`/comments/${comment._id}`, { content: commentContent })
        .then(res => {
            toast.success('Comment updated successfully');
            fetchPost()
            setEditMode(false);
        }).catch(err => {
            toast.error(err.response.data);
        })
    }


    return(
        <div className={classes.container}>
            {editMode ? 
                <div className={classes.editComment}>
                    <textarea className={classes.commentBox} value={commentContent} onChange={handleChange}></textarea>
                    <div className={classes.buttons}>
                        <Button rounded onClick={handleSubmit}>Save</Button>
                        <Button rounded outlined onClick={handleEdit}>Cancel</Button>
                    </div>
                </div>
            :
            <>
                <p>
                    {comment?.content} 
                    <span className={classes.user}>
                        &nbsp;– {comment?.user?.first_name} {comment?.user?.last_name} 
                    </span> 
                    <span>
                        &nbsp;at {new Date(comment?.createdAt).toLocaleString()}
                    </span>
                </p>
                {auth.user._id === comment.user._id && <EditIcon onClick={handleEdit} />}
            </>}
        </div>
    )
}

export default Comment;