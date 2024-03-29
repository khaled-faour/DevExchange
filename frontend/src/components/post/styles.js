import { createUseStyles } from "react-jss";
import colors from '../../assets/styles/colors';

const styles = createUseStyles({
    container:{
        position: 'relative',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        padding: '20px',
        backgroundColor: '#fff'
        
    },
    innerContainer:{
        display: 'flex',
        gap: '20px',
    },
    content:{
        width: '100%',
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        '& svg':{
            color: '#9e9e9e',
            cursor: 'pointer',
            '&:hover':{
                color: 'black'
            }
        }
    },
    title:{
        margin: 0,
        height: '25px',
    },
    editor:{
        padding: '10px 0',
    },
    editButtons:{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '5px',
        padding: '10px 0',
    },
    voting:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    voteButton:{
        cursor: 'pointer',
        '& svg':{
            fontSize: '40px',
            '&:hover':{
                color: colors.primary,
            },
        }
        
    },
    userCardContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    details:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    comments:{
        marginTop: '5px',
    },
    addCommentButtonContainer:{
        paddingTop: '10px',
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
    },
    moreComments:{
        textDecoration: 'none',
        color: colors.primary,
        '&:hover':{
            cursor: 'pointer'
        }
    }

});

export default styles;