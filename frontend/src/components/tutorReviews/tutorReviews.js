import React, { useState, useEffect } from 'react';
import styles from './styles';
import ReviewTile from '../reviewTile/reviewTile';

const TutorReviews = ({ reviews }) => {
    const classes = styles();

    return (
        <div>
            {reviews.map(review => (
                <ReviewTile review={review} key={review._id}/>
            ))}
        </div>
    );
}

export default TutorReviews;