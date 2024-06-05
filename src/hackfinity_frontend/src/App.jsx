import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Base components
import LandingPage from "./components/common/LandingPage";
import NoPage from "./components/common/NoPage";
import SpinLoading from "./components/utils/SpinLoading";
import SignUp from './components/auth/SignUp';
import Login from './components/auth/login';  // Ensure correct path and capitalization
import UnAuthorized from "./components/utils/Unauthorized";


const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<SpinLoading />}>
        <Router>
          <Routes>
            <Route path="*" element={<NoPage />} />
            <Route index element={<LandingPage />} />
            <Route path="/org-signup" element={<SignUp />} />
            <Route path="/part-signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<UnAuthorized />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
