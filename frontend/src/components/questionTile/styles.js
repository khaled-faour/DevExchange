import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    container:{
        display: "flex",
        padding: '20px',
        border: '1px solid',
        borderRadius: '5px',
        backgroundColor: '#fff',
        transition: '0.2s ease-in-out',
        boxSizing: 'border-box',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0px 2px 5px 0px rgb(20 18 18 / 25%)'
        }
    },
    avatar:{
        height: '100%',
        // padding: '10px'
        marginTop: '-10px',
        paddingRight: '10px'
    },
    content: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '5px',
        
    },
    title:{
        padding: '0 0 10px 0',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

    },
    tags:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        '& > div': {
            display: 'flex',
            gap: '5px',
        }
    },
    footer:{
        color: '#808080',
    }
});

export default styles;