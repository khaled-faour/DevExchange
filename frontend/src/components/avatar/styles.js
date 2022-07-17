import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    avatar: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            height: '100%',
            borderRadius: '50%',
            border: '3px solid #fff',
        }
    }
});

export default styles;