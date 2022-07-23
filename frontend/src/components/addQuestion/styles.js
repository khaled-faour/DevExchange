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
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& svg':{
            cursor: 'pointer',
            color: '#5b5b5b',
            '&:hover':{
                color: '#8c8c8e',
            }
        }
    }
});

export default styles;