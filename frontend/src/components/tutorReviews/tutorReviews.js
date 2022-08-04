import React from 'react';
import ReviewTile from '../reviewTile/reviewTile';

const TutorReviews = ({ reviews }) => {

    return (
        <div>
            {reviews.map(review => (
                <ReviewTile review={review} key={review._id}/>
            ))}
        </div>
    );
}

export default TutorReviews;