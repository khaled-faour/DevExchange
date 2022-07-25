import React from 'react';
import styles from './styles';

// Material UI
import StarIcon from '@mui/icons-material/Star';
import StarOutlinedIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';


const ReviewStars = ({ rating }) => {
    const classes = styles();
    const [stars, setStars] = React.useState([]);

    React.useEffect(() => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if(i < rating && (i + 1) > rating) {
                stars.push(<StarHalfIcon key={i}/>);
            } else if(i < rating) {
                stars.push(<StarIcon key={i}/>);
            } else {
                stars.push(<StarOutlinedIcon key={i}/>);
            }
        }
        setStars(stars);
    }, [rating]);

    return (
        <div className={classes.rating}>
            {stars} ({rating})
        </div>
    );
}

export default ReviewStars;