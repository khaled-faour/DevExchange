import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import TopRatedTutors from '../../components/topRatedTutors/topRatedTutors';
import MostVotedQuestions from '../../components/mostVotedQuestions/mostVotedQuestions';


const Home = () => {
    const auth = useAuth()
    
    return (
        <div>
            <TopRatedTutors />
            <MostVotedQuestions />
        </div>
    );
}
export default Home;