import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors';

const styles = createUseStyles({
    container:{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        width: '100%',
    },
    review:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '10px 0'
    },
    header:{
        width: '100%',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        '& h4':{
            margin: "0",
            
        }
    },
    rate:{
        display: 'flex',
        alignItems: 'center',
        fontSize: '15px',
        '& svg':{
            marginRight: '5px',
            color: colors.primary,
        }
    },
    date:{
        width: '100%',
        textAlign: 'right',
    },
    separator:{
        margin: '0 0 0 45px',
        border: 'none',
        borderTop: '1px solid #cdcdcf',
        paddingBottom: '5px'
    }
});

export default styles;