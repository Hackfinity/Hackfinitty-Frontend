import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"; // Import BrowserRouter

// Base components
import LandingPage from "./components/common/LandingPage";
import NoPage from "./components/common/NoPage";
import SpinLoading from "./components/utils/SpinLoading";
import participantSignup from './components/auth/participantSignup';
import SignUp from './components/auth/SignUp';
import Login from '../src/components/auth/login';

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<SpinLoading />}>
        <Router> {/* Wrap Routes with BrowserRouter */}
          <Routes>
            <Route path="*" element={<NoPage />} />
            {/* COMMON ROUTES */}
            <Route index element={<LandingPage />} />
          <Route path="/org-signup" element={<SignUp />} />
          <Route path="/part-signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="unauthorized" element={<UnAuthorized />} />
          
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
