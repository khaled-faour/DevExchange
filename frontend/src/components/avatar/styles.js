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
    },
    avatarPlaceholder: {
        
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#cdcdcf',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
        
    }

});

export default styles;