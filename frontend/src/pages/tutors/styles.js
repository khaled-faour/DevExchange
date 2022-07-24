import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: "1rem",
    },
    filtersContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        backgroundColor: 'transparent',
        padding: '10px',
        boxSizing: 'border-box',
    },
    title:{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        margin: 0,
        '& h4':{
            margin: 0,
            padding: 0
        },
        '& svg':{
            fontSize: '20px',
        }
    },
    filter:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '5px',

    },
    buttons:{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '5px',
    },
});

export default styles;