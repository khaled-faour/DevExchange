import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors'

const styles = createUseStyles({
    nav:{
        backgroundColor: colors.primary,
        height: '75px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 50px',
    },
    logo:{
        display: 'flex',
        alignItems: 'center',
        '& img': {
            height: '50px',
            verticalAlign: 'middle',
        },
        '&:hover': {
            cursor: 'pointer',
        }
    },
    links:{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        '& li': {
            '& a': {
                fontSize: '16px',
                color: 'white',
                textDecoration: 'none',
                boxSizing: 'border-box',
                
                },
                '&:hover': {
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                    textDecorationThickness: '3px',
                    textUnderlineOffset: '15px',
                
            }
        }
    },
    selectedLink:{
        fontSize: '16px',
        color: 'white',
        textDecoration: 'none',
        boxSizing: 'border-box',
        cursor: 'pointer',
        textDecoration: 'underline',
        textDecorationColor: 'white',
        textDecorationThickness: '3px',
        textUnderlineOffset: '15px',
    },
    rightMenu:{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        '& svg': {
            fontSize: '24px',
            color: 'white',
        }
    },
    balance:{
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    avatar:{
        display: 'flex',
        alignItems: 'center',
        '&:hover':{
            cursor: 'pointer',
        }
    }

});
export default styles;