import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';

import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import ConfirmSignUp from "./ConfirmAuth.jsx";
import Update from './Update';
import Navbar from './Navbar';

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
            const authenticatedUser = await Auth.currentAuthenticatedUser();
                if(authenticatedUser.username){setIsLogged(true)}
                setIsLogged(true);
                setUser(authenticatedUser);
            } 
            catch (error) {
                setIsLogged(false);
                setUser(null);
            }
        };

        checkAuthStatus();

        const authListener = Hub.listen('auth', ({ payload: { event } }) => {
            if (event === 'signIn') {
                checkAuthStatus();
            } else if (event === 'signOut') {
                setIsLogged(false);
                setUser(null);
            }
        });

        return () => {
            console.log('Cleaning up effect');
            authListener();
            Hub.remove('auth');
        };
    }, [isLogged]);

    return (
        <Router>
            <Navbar />  
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/confirmsignup" element={<ConfirmSignUp />} />
                <Route path="/profile" element={!isLogged ? <HomePage /> : <Profile />} />
                <Route path="/update" element={!isLogged ? <HomePage /> : <Update />} />
            </Routes>
        </Router>
    );
}

export default App;
