import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import AuthenticatedRoutes from './routes';
import UnauthenticatedRoutes from './unauthenticatedRoutes';


const Routes = () => {
    const auth = useAuth()
    
    if(auth.isAuthenticated) {
        return <AuthenticatedRoutes />
    }
    return <UnauthenticatedRoutes />
}

export default Routes;

