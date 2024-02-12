import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/NavbarLayout";
import Footer from "./components/layout/FooterLayout";
import AOS from "aos";
import "aos/dist/aos.css";


import EarthAnimation from "./pages/EarthAnimation";
import BuilderChart from "./pages/BuilderChart";
import LoadData from "./pages/LoadData";
import SelectData from "./pages/SelectData";

function App() {
  AOS.init();


  return (
    <>
      
        <Router>
          <div className="max-h-screen bg-black">
          <Routes>
            <Route path="/" element={<EarthAnimation />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            {/* <Route path="/signin" element={<SignIn />} /> */}
            {/* <Route path="/signup" element={<SignUp />} /> */}
            {/* <Route path="/confirmsignup" element={<ConfirmSignUp />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/update" element={<Update />} /> */}
            <Route path="/builder_chart" element={<BuilderChart />} />
            <Route path="/load_data" element={<LoadData />} />
            <Route path="/select_data" element={<SelectData />} />
          </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
