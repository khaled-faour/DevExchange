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
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    comments:{
        marginTop: '5px',
    },
    showCommentBoxButton:{
        textDecoration: 'none',
        color: colors.primary,
        '&:hover':{
            cursor: 'pointer'
        }
    },
    addComment:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:'5px',
        padding: '10px',
        // background: '#cdcdcf',
        borderTop: '1px solid #cdcdcf',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    commentBox:{
        width: '100%',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        padding: '5px',
        outline: 'none',
        resize: 'none',
        '&:focus':{
            border: '1px solid #cdcdcf',
            borderRadius: '5px',
            padding: '5px',
            outline: 'none',
            resize: 'none',
        }
    },
    buttons:{
        width: '100%',
        display: 'flex',
        gap: '5px',
        
    },

    addCommentButton:{
        background: colors.primary,
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
        '&:hover':{
            filter: 'brightness(0.8)',
            cursor: 'pointer',
        }
    }

});

export default styles;