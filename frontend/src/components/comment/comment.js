import React, { useState, useEffect } from 'react';
import styles from './styles';

const Comment = ({ comment }) => {
    const classes = styles();

    return(
        <div className={classes.container}>
            <p>
                {comment?.content} 
                <span className={classes.user}>
                    &nbsp;– {comment?.user.first_name} {comment?.user.last_name} 
                </span> 
                <span>
                    &nbsp;{new Date(comment?.createdAt).toLocaleString()}
                </span>
            </p>
        </div>
    )
}

export default Comment;