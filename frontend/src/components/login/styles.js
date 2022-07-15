import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
    },
    divider:{
        width: '100%',
        margin: '10px 0',
        color: '#ccc',
        fontSize: '15px',
    },
    socialButton: {
       '&:hover': {
            cursor: 'pointer',
            filter: 'brightness(0.9)',
       }
    },


})

export default styles;