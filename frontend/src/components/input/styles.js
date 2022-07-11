import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    inputContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        '& input': {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1.2rem',
            '&:focus': {
                outline: 'none',
            }
        },
        '& label': {
           width: '100%',
           position: 'relative',
           left: '-10px',
        },
        '& .error': {
            position: 'relative',
            left: '-10px',
            width: '100%',
            color: 'red',
            color: 'red',
        }
    }
});

export default styles;