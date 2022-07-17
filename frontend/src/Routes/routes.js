import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home/home";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default Router;