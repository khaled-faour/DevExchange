import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    container:{
        width: '100%',
        paddingLeft: '10px',
        borderBottom: '1px solid #cdcdcf',
        // background: '#cdcdcf',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    user:{
        fontWeight: "bold",
    }
});

export default styles;