import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    questions:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        
    },
    filtersContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
        border: '1px solid #cdcdcf',
        borderRadius: '5px',
        backgroundColor: '#fff',
        padding: '10px',
        boxSizing: 'border-box',
    },
    title:{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        margin: 0,
        '& h4':{
            margin: 0,
            padding: 0
        },
        '& svg':{
            fontSize: '20px',
        }
    },
    filter:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '5px',

    },
    option:{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: '#888',
    },
    radio:{
        height: '18px',
        width: '18px',
    },
    buttons:{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '5px',
    },
    sort:{
        '& select':{
            height: '40px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            background: 'url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #ddd',
            '&:hover':{
                background: 'url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #ddd'
            }
        }
    }
});

export default styles;