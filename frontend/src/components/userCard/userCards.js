import React, { useState, useEffect } from 'react';
import styles from './styles';
import Avatar from '../avatar/avatar';

const UserCards = ({user}) => {
    const classes = styles();

    return (
        <div className={classes.userCard}>
            <Avatar user={user}/>
            <div className={classes.userDetails}>
                <span>{user.first_name} {user.last_name}</span>
                <span>{user.username}</span>
            </div>
        </div>
    )
}

export default UserCards;