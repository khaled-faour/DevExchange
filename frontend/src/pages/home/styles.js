import {createUseStyles} from 'react-jss';
import colors from '../../assets/styles/colors';

const styles = createUseStyles({
    header: {
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
       
        
    }
})

export default styles;