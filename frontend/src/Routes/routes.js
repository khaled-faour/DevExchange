import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../components/navbar/navbar";
import Container from "../components/container/container";

const Router = () => {
    return(
        <>
            <Navbar/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="*" element={<Home />} />
                </Routes>
            </Container>
        </>
    )
}

export default Router;