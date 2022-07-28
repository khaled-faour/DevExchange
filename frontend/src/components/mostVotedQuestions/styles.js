import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        '& > *': {
            width: '100%',
        }
    }
})

export default styles;