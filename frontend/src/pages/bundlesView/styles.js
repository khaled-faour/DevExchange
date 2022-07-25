import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors'

const styles = createUseStyles({
    container: {
        width: '100%',
    },
    message:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        '& svg':{
            width: '100px',
            height: '100px',
            objectFit: 'fill',
            color: colors.success,
        }
    }
});

export default styles;