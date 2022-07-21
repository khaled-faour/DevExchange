import React, { useState, useEffect } from 'react';
import styles from './styles';

const Avatar = ({url, user}) => {
    const classes = styles();
    return (
        <div className={classes.avatar}>
            {
                url ? 
                <img src={url}/> : 
                user.profile_picture ?
                    <img src={user.profile_picture}/> :
                    <div className={classes.avatarPlaceholder}>
                        {user?.first_name[0] ?? "A"}{user?.last_name[0] ?? "B"}
                    </div>
            }
        </div>
    );
}
export default Avatar;