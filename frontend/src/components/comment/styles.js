import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    container:{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        paddingLeft: '10px',
        borderBottom: '1px solid #cdcdcf',
        // background: '#cdcdcf',
        borderRadius: '5px',
        boxSizing: 'border-box',
        '& svg': {
            color: '#9e9e9e',
            cursor: 'pointer',
            '&:hover':{
                color: 'black'
            }
        }
    },
    user:{
        fontWeight: "bold",
    },
    editComment:{
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
});

export default styles;