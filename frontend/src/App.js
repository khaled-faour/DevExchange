import React, {useEffect} from "react";
import Home from "./pages/home/home";
import useAuth from "./hooks/useAuth";
import {useSelector} from "react-redux";

function App() {
  const auth = useAuth();
  const user = useSelector(state => state.user);
  
  useEffect(()=>{
    auth.verify();
  },[])

  return (
    <div className="App">
      {!auth.isAuth ? <Home /> : <button onClick={auth.logout}>Logout</button>}
    </div>
  );
}

export default App;
