import { defaultListboxReducer } from "@mui/base";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    tag:{
        display: 'inline-block',
        border: '1px solid',
        padding: '2px 10px',
        borderRadius: '5px',
    },
    rounded: {
        borderRadius: '20px',
    }
});

export default styles;