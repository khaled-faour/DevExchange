import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    button:{
        backgroundColor: '#0074ff',
        border: 'none',
        borderRadius: '50px',
        height: '50px',
        padding: '0 20px',
        color: '#fff',
        fontWeight: '500',
        '&:hover': {
            filter: 'brightness(.8)',
            cursor: 'pointer',
        }
    }
});

export default styles;