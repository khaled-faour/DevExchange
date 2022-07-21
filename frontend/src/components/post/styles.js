import { createUseStyles } from "react-jss";
import colors from '../../assets/styles/colors';

const styles = createUseStyles({
    container:{
        position: 'relative',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        padding: '20px',
        
    },
    innerContainer:{
        display: 'flex',
        gap: '20px',
    },
    content:{
        width: '100%',
    },
    title:{
        margin: 0,
        height: '25px',
    },
    voting:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    voteButton:{
        cursor: 'pointer',
        '&:hover':{
            color: colors.primary
        }
    },
    details:{
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
    },
});

export default styles;