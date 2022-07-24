import { createUseStyles } from "react-jss";
import colors from '../../assets/styles/colors';

const styles = createUseStyles({
    tutorCard: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "1rem",
        border: '1px solid #cdcdcf',
        borderRadius: "5px",
        "&:hover": {
            cursor: "pointer",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        },
    },
    tutorCardContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        gap: "1rem",
    },
    tutorCardImage:{
        width: "230px",
        height: "200px",
        '& img': {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
        }
    },
    tutorCardInfo:{
        width: '300px',
        '& h3': {
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "0",
        },
        '& p': {
            fontSize: "1rem",
            margin: "0",
        }
    },
    tutorCardInfoStat:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "0.5rem",
        color: "#8a8a8a",
        fontSize: "1rem",
        '& svg': {
            color: colors.primary
        }
    },
    tutorCardInfoBio:{
        color: "#8a8a8a",
        fontSize: "1rem",
    },
    tutorCardButtons:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        height: "100%",
        gap: "1rem",
        '& button': {
            minWidth: "120px",
        }
    }

});

export default styles;