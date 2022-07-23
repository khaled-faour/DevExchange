import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    content:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '20px',
    },
    tagsFilter:{
        width: '100%',
        zIndex: '9999',
    }
});

export default styles;