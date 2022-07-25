import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../components/navbar/navbar";
import Container from "../components/container/container";
import Questions from "../pages/questions/questions";
import QuestionView from "../pages/questionView/questionView";
import Tutors from "../pages/tutors/tutors";
import TutorView from "../pages/tutorView/tutorView";
import BundlesView from "../pages/bundlesView/bundlesView";

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
                            <Route index element={<Questions />} />
                            <Route path=":id" element={<QuestionView />} />
                    </Route>

                    {/* Tutor Routes */}
                    <Route path="tutors">
                            <Route index element={<Tutors />} />
                            <Route path=":id" element={<TutorView />} />
                    </Route>
                    <Route path="bundles" element={<BundlesView />} /> 
                    <Route path="*" element={<Home />} />
                </Routes>
            </Container>
        </>
    )
}

export default Router;