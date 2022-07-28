import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors';
const styles = createUseStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '20px'
    },
    innerContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        boxSizing: 'border-box',
        width: '100%',
        backgroundColor: '#fff',
    },
    availabilityContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px',
        '& h3, & h4':{
            margin: '2px',
            '& span':{
                fontWeight: 'normal'
            }
        }
    },
    actionButtons:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '5px',
        '& svg':{
            marginRight: '5px',
            '&:hover':{
                cursor: 'pointer',
                filter: 'brightness(0.8)'
            }
        }
    }
});

export default styles;