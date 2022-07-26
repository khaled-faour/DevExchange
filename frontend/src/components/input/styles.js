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
            fontSize: '16px',
            boxSizing: 'border-box',
            fontFamily: 'Roboto',
            '&:focus': {
                outline: 'none',
            }
        },
        '& label': {
           width: '100%',
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