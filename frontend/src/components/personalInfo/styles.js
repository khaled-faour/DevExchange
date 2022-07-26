import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    imageContainer:{
        borderRadius: '5px',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        padding: '16px',
        boxSizing: 'border-box',
        
    },
    imageButton:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundSize:'cover',
        backgroundColor: 'transparent',
        '&:hover': {
            filter: 'brightness(0.7)',
            cursor: 'pointer',
        }
    },
    imageInput:{
        display: 'none',
    }
});

export default styles;