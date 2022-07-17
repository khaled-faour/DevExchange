import { Routes, Route, Link } from "react-router-dom";
import Landing from "../pages/landingPage/landing";
const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<Landing />} />
        </Routes>
    );
}

export default Router;