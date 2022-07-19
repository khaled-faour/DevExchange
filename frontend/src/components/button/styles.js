import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors';

const styles = createUseStyles({
    button:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        border: 'none',
        borderRadius: '5px',
        // height: '50px',
        padding: '10px 20px',
        color: '#fff',
        fontWeight: '600',
        '&:hover': {
            filter: 'brightness(.8)',
            cursor: 'pointer',
        },
        '& svg': {
            fontSize: '20px',
        }
    },
    outlinedButton:{
        color: colors.primary,
        border: 'solid 1px ' + colors.primary,
        borderRadius: '5px',
        padding: '10px 20px',
        fontWeight: '600',
        '&:hover': {
            filter: 'brightness(.8)',
            cursor: 'pointer',
        }
    },
    fullWidth:{
        width: '100%',
    },
    rounded:{
        borderRadius: '20px',
    }
});

export default styles;