import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';


const Home = () => {
    const auth = useAuth()
    
    return (
        <div>
            <h1>Home</h1>
            <button onClick={auth.logout}>logout</button>
        </div>
    );
}
export default Home;