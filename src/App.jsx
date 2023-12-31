import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/layout/NavbarLayout";
import Footer from "./components/layout/FooterLayout";
import Loading from "./components/layout/LoadingLayout";

import EarthAnimation from "./pages/EarthAnimation";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ConfirmSignUp from "./pages/ConfirmAuth";
import Update from "./pages/Update";
import BuilderChart from "./pages/BuilderChart";
import LoadData from "./pages/LoadData";
import SelectData from "./pages/SelectData";

function App() {
  AOS.init();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateAsyncLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    simulateAsyncLoad();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Navbar />
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
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
