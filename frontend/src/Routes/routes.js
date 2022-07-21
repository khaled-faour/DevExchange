import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../components/navbar/navbar";
import Container from "../components/container/container";
import Questions from "../pages/questions/questions";
import QuestionView from "../pages/questionView/questionView";

const Router = () => {
    return(
        <>
            <Navbar/>
            <Container>
                <Routes>
                    {/* Home Screen Route */}
                    <Route index element={<Home />} />

                    {/* Question Routes */}
                    <Route path="questions">
                            <Route path="" element={<Questions />} />
                            <Route path=":id" element={<QuestionView />} />
                    </Route>
                    <Route path="*" element={<Home />} />
                </Routes>
            </Container>
        </>
    )
}

export default Router;