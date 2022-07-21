import React, { useState, useEffect } from 'react';
import styles from './styles';
import Avatar from '../../components/avatar/avatar';
import UserCards from '../../components/userCard/userCards';

// Material UI
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Post = (props)=>{
    const classes = styles();
    const {title, content, user, createdAt} = props.post;
    const handleVote = (type)=>{
        console.log(type);
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
                <UserCards user={user}/>
            </div>
        </div>
    )
}

export default Post;