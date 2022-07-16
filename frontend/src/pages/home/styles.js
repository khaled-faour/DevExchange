import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors';
import fontSizes from '../../assets/styles/fontSizes';

const sectionHeigt = window.innerHeight - 120
const styles = createUseStyles({
    header: {
        position: 'fixed',
        right: 0,
        left: 0,
        height: '90px',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 50px',
    },
    links: {
        display: 'flex',
        height: '100%',
        listStyle: 'none',
        '& button': {
            backgroundColor: 'transparent',
            border: 'none',
            height: '100%',
            padding: '0 20px',
            fontSize: '1.2rem',
            
            '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
                textDecorationColor: colors.primary,
                textDecorationStyle: 'solid',
                textDecorationThickness: '2px',
                textUnderlineOffset: '35px',
            }
        },
    },
    
    section:{
        height: sectionHeigt,
        padding: '110px 50px 10px 50px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        '&:nth-child(odd)': {
            backgroundColor: '#f5f5f5',
        },
        '& h1': {
            fontSize: fontSizes.h1,
            margin: '0 0 0 0',
        },
        '& h2': {
            fontSize: fontSizes.h2,
            fontWeight: 'normal',
            margin: '0 0 0 0',
        },
        '& .subtitle': {
            color: 'black'
        }
    },
    landing:{
        width: '30%',
        color: '#474D59',
        // textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    title:{
        width: '30%',
        color: colors.primary,
        // textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    description:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& img': {
            width: '100%',
            height: 'auto',
            maxWidth: '400px',
            maxHeight: '400px',
        }
    },
    footer:{
        height: '90px',
        backgroundColor: colors.dark,
        display: 'flex', 
        justifyContent: 'space-evenly',
        color: 'white',
        alignItems: 'center',
    },
    closeIcon:{
        float: 'right',
        cursor: 'pointer',
        '&:hover': {
            color: colors.primary,
        }
    }
})

export default styles;