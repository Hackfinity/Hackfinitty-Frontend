import React, { useState } from "react";
import Navbar from "../common/Navbar";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setCurrentUserRole,
  setAccessToken,
  setLoggedInUserRef,
} from "../features/user/userSlice";
import { CircularProgress } from "@mui/material";
import { AuthClient } from "@dfinity/auth-client";

const SignUp = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userRole = location.pathname.split("/");

  function getRole() {
    let user;
    if (userRole[1] === "org-signup") {
      user = "ORGANIZER";
    } else if (userRole[1] === "part-signup") {
      user = "PARTICIPANT";
    } else {
      user = null;
    }
    return user;
  }

  const handleICSignUp = async () => {
    setIsSubmitting(true);
    try {
      const authClient = await AuthClient.create();
      const isAuthenticated = await authClient.isAuthenticated();

      if (!isAuthenticated) {
        await authClient.login({
          identityProvider: 'https://identity.ic0.app',
          onSuccess: async () => {
            const identity = await authClient.getIdentity();
            const principal = identity.getPrincipal().toText();

            const role = getRole();

            setSuccessMessage("Sign up successful!");
            setIsSubmitting(false);

            // Update Redux store
            dispatch(setAccessToken({ accessToken: principal }));
            dispatch(setLoggedInUserRef({ loggedInUserRef: principal }));
            dispatch(setCurrentUserRole({ currentUserRole: role }));
            navigate(role === "ORGANIZER" ? "/organizer" : "/participant");
          },
          onError: (err) => {
            setErrorMessage(`Sign up failed: ${err.message}`);
            setIsSubmitting(false);
          },
        });
      } else {
        // User is already authenticated
        const identity = await authClient.getIdentity();
        const principal = identity.getPrincipal().toText();
        const role = getRole();

        setSuccessMessage("Sign up successful!");
        setIsSubmitting(false);

        // Update Redux store
        dispatch(setAccessToken({ accessToken: principal }));
        dispatch(setLoggedInUserRef({ loggedInUserRef: principal }));
        dispatch(setCurrentUserRole({ currentUserRole: role }));
        navigate(role === "ORGANIZER" ? "/organizer" : "/participant");
      }
    } catch (err) {
      setErrorMessage(`Error initializing AuthClient: ${err.message}`);
      setIsSubmitting(false);
    }
  };

  const handleHover = () => {
    return isSubmitting
      ? "cursor-not-allowed"
      : "cursor-pointer hover:bg-white hover:text-custom-blue hover:border-2 hover:border-custom-blue";
  };

  return (
    <div>
      <Navbar />
      <div className="max-h-screen flex items-center justify-center mt-10 bg-light-blue">
        <div className="bg-white p-8 rounded shadow-md w-100 border border-custom-blue overflow-y-auto ">
          <h2 className="mb-6 font-semibold">
            Sign up for the ICP hackathons platform
          </h2>

          {successMessage && (
            <div className="mt-4 text-green-600 mb-4 border p-5 rounded border-green-600 text-[10px] md:text-[15px]">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mt-4 text-red-600 mb-4 border p-5 rounded border-red-600 text-[10px]">
              {errorMessage}
            </div>
          )}

          <button
            onClick={handleICSignUp}
            disabled={isSubmitting}
            className={`w-full text-[13px] md:text-[16px] bg-custom-blue text-white py-2 mt-4 rounded ${handleHover()}`}
          >
            {isSubmitting ? (
              <>
                <CircularProgress sx={{ color: "white" }} size={20} /> Signing you up...
              </>
            ) : (
              "Sign up with Internet Identity"
            )}
          </button>
          <p className="mt-5 md:text-[16px] text-gray-600 text-[10px]">
            Already have an ICP account?
            <Link
              to="/login"
              className="text-blue-500 ml-1 text-[10px] md:text-[16px]"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
