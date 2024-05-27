import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"; // Import BrowserRouter

// Base components
import LandingPage from "./components/common/LandingPage";
import NoPage from "./components/common/NoPage";
import SpinLoading from "./components/utils/SpinLoading";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<SpinLoading />}>
        <Router> {/* Wrap Routes with BrowserRouter */}
          <Routes>
            <Route path="*" element={<NoPage />} />
            {/* COMMON ROUTES */}
            <Route index element={<LandingPage />} />
            {/* Uncomment and add the path prop if you want to use the SignUp route again */}
            {/* <Route path="/org-signup" element={<SignUp />} /> */}
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
