import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    userCard:{
        display: 'flex',
        gap: '10px',
        padding: '5px',
        borderRadius: '5px',
    },
    userDetails:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
});

export default styles;