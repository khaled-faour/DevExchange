import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    list:{
        listStyle: 'none',
        position: 'absolute',
        right: '50px',
        top: '50px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '150px',
        transition: 'all 0.5s ease',
        borderRadius:'5px',
        opacity: 1,
        boxShadow: '0px 0px 100px rgba(20, 18, 18, 0.25)',
        padding: '0',
        zIndex: '100',
    },
    subItem:{
        cursor: 'pointer',
        padding: '0 10px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: 'rgb(232, 232, 232)',
        }
    }
});

export default styles;