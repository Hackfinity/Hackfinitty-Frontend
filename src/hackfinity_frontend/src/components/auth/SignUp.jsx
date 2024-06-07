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
  const userRole = location.pathname.split("/")[1]; // Extract role from URL

  const getRole = () => {
    if (userRole === "org-signup") {
      return "ORGANIZER";
    } else if (userRole === "part-signup") {
      return "PARTICIPANT";
    } else {
      return null;
    }
  };

  const handleICSignUp = async () => {
    setIsSubmitting(true);
    try {
      const authClient = await AuthClient.create();
      const isAuthenticated = await authClient.isAuthenticated();

      const handleSuccess = async (identity) => {
        const principal = identity.getPrincipal().toText();
        const role = getRole();

        setSuccessMessage("Sign up successful!");
        setIsSubmitting(false);

        // Update Redux store
        dispatch(setAccessToken({ accessToken: principal }));
        dispatch(setLoggedInUserRef({ loggedInUserRef: principal }));
        dispatch(setCurrentUserRole({ currentUserRole: role }));

        if (role === "ORGANIZER") {
          navigate("/organizer-dashboard");
        } else if (role === "PARTICIPANT") {
          navigate("/participant-dashboard");
        } else {
          setErrorMessage("Invalid role");
        }
      };

      if (!isAuthenticated) {
        await authClient.login({
          identityProvider: "https://identity.ic0.app",
          onSuccess: async () => {
            const identity = await authClient.getIdentity();
            await handleSuccess(identity);
          },
          onError: (err) => {
            setErrorMessage(`Sign up failed: ${err.message}`);
            setIsSubmitting(false);
          },
        });
      } else {
        const identity = await authClient.getIdentity();
        await handleSuccess(identity);
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
