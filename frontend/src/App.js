import React, {useEffect} from "react";
import useAuth from "./hooks/useAuth";
import Routes from "./Routes";

function App() {
  const auth = useAuth();

  useEffect(() => {
    auth.verify();
  }
  , []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
