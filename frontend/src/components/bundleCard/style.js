import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    container:{
        display: 'flex',
        border: '1px solid #cdcdcf',
        borderRadius: '12px',
        padding: '10px',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f5f5f5',
        }
    },
    image:{
        width: '100px',
        height: '100px',
        margin: '0px 20px',
        '& img':{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
        }
    },
    checkbox:{
        width: '20px',
        height: '20px',
        border: '1px solid #cdcdcf',
        borderRadius: '10px',
    },
    info:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& h1':{
            fontSize: '20px',
            margin: '0px',
        },
        '& h2':{
            fontSize: '14px',
            margin: '0px',
        }
    },
});

export default styles;