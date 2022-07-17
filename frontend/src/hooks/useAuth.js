import {useSelector, useDispatch} from "react-redux";
import {verify as verifyUser, logout as logoutUser} from "../redux/actions/authActions";

const useAuth = ()=>{
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);
    const isAuth= useSelector(state=>state.user.isAuthenticated);
    
    const verify = ()=>{
        dispatch(verifyUser());
    }

    const logout = ()=>{
        dispatch(logoutUser());
    }

    return {user, isAuth, logout, verify};
}

export default useAuth;