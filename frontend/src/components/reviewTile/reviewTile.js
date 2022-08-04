import React from 'react';
import Avatar from '../../components/avatar/avatar';
import ReviewStars from '../../components/reviewStars/reviewStars';
import styles from './styles';

const ReviewTile = ({ review }) => {
    const classes = styles();

    return (
        <>
        <div className={classes.container}>
            <div className={classes.avatar}>
                <Avatar user={review.user}/>
            </div>
            <div className={classes.review}>
                <div className={classes.header}>
                    <div className={classes.name}>
                        <h4>{review.user.first_name} {review.user.last_name}</h4>
                    </div>
                    <div className={classes.rate}>
                        <ReviewStars rating={review.rate}/>
                    </div>
                </div>
                <div className={classes.date}>
                    {review.createdAt.split('T')[0]}
                </div>
                <div className={classes.content}>
                    {review.review} 
                </div>
            </div>
        </div>
        <hr className={classes.separator} />
        </>
    );
}

export default ReviewTile;