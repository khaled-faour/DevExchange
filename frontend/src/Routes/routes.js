import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../components/navbar/navbar";

const Router = () => {
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="*" element={<Home />} />
            </Routes>
        </>
    )
}

export default Router;