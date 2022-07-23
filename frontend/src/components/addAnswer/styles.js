import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: '10px'
    },
    actions:{
        width: '100%',
        display: 'flex',
        gap: '10px',
        justifyContent: 'flex-end'
    }
});

export default styles;