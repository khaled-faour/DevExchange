import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors';

const styles = createUseStyles({
    button:{
        backgroundColor: colors.primary,
        border: 'none',
        borderRadius: '50px',
        // height: '50px',
        padding: '10px 20px',
        color: '#fff',
        fontWeight: '600',
        '&:hover': {
            filter: 'brightness(.8)',
            cursor: 'pointer',
        }
    }
});

export default styles;