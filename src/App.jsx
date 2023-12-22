import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ConfirmSignUp from "./pages/ConfirmAuth";
import Update from './pages/Update';
import BuilderChart from './pages/BuilderChart'

function App() {
    return (
        <Router>
            <Navbar />  
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/confirmsignup" element={<ConfirmSignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/update" element={<Update />} />
                <Route path="/builder_chart" element={<BuilderChart />} />
            </Routes>
        </Router>
    );
}

export default App;
