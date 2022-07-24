import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors';

const styles = createUseStyles({
    link:{
        cursor: 'pointer',
        color: colors.primary,
        textDecoration: 'underline',
    }
});

export default styles;