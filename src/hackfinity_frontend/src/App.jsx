<<<<<<< HEAD
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"; // Import BrowserRouter

// Base components
import LandingPage from "./components/common/LandingPage";
import NoPage from "./components/common/NoPage";
import SpinLoading from "./components/utils/SpinLoading";
=======
import { useState } from 'react';
import {canisterId,createActor,idlFactory} from "../../declarations/backend"
function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const actor = createActor(canisterId,{})

    actor.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }
>>>>>>> origin/HEAD

const App = () => {
  return (
<<<<<<< HEAD
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
=======
    <main>
      IC Hackerthon Platform
    </main>
>>>>>>> origin/HEAD
  );
};

export default App;
