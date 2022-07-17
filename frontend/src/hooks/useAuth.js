import {useSelector, useDispatch} from "react-redux";
import {verify as verifyUser, logout as logoutUser} from "../redux/actions/authActions";

const useAuth = ()=>{
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);
    
    const verify = ()=>{
        dispatch(verifyUser());
    }

    const logout = ()=>{
        dispatch(logoutUser());
    }

    return {...user, logout, verify};
}

export default useAuth;