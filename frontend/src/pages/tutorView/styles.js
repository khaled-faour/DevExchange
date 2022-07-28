import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
    },
    about:{
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: "1rem",
        backgroundColor: '#fff',
    },
    title:{
        fontSize: "1.5rem",
        fontWeight: "bold",
        margin: "0",
    },
    aboutDescription:{
        fontSize: "1rem",
        margin: "0",
        // overflow: 'hidden',
        // display: '-webkit-box',
        // '-webkit-box-orient': 'vertical',
        // /* truncate to 4 lines */
        // '-webkit-line-clamp': 2
    },
    reviews:{
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: "1rem",
        backgroundColor: '#fff',
    },
});

export default styles;