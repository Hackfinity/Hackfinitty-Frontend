import React, { useState } from "react";
import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setCurrentUserRole,
  setAccessToken,
  setLoggedInUserRef,
} from "../features/user/userSlice";
import { CircularProgress } from "@mui/material";
import { AuthClient } from "@dfinity/auth-client";

const LogIn = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHome = (role) => {
    if (role === "ORGANIZER") {
      navigate("/organizer");
    } else if (role === "PARTICIPANT") {
      navigate("/participant");
    } else if (role === "ADMIN") {
      navigate("/admin");
    } else {
      console.log({ error: "Invalid role" });
    }
  };

  const determineRole = (principal) => {
    // Example logic to determine the role based on principal
    // Replace this with your actual logic
    if (principal.startsWith("aaaaa")) {
      return "ADMIN";
    } else if (principal.startsWith("bbbbb")) {
      return "ORGANIZER";
    } else {
      return "ORGANIZER";
    }
  };

  const handleICLogin = async () => {
    setIsSubmitting(true);
    try {
      const authClient = await AuthClient.create();
      const isAuthenticated = await authClient.isAuthenticated();

      const handleSuccess = async (identity) => {
        const principal = identity.getPrincipal().toText();
        const role = determineRole(principal);

        if (role) {
          setSuccessMessage("Login successful!");
          setIsSubmitting(false);

          // Update Redux store
          dispatch(setAccessToken({ accessToken: principal }));
          dispatch(setLoggedInUserRef({ loggedInUserRef: principal }));
          dispatch(setCurrentUserRole({ currentUserRole: role }));
          handleHome(role);
        } else {
          setErrorMessage("Identity verification failed.");
          setIsSubmitting(false);
        }
      };

      if (!isAuthenticated) {
        await authClient.login({
          identityProvider: 'https://identity.ic0.app',
          onSuccess: async () => {
            const identity = await authClient.getIdentity();
            await handleSuccess(identity);
          },
          onError: (err) => {
            setErrorMessage(`Login failed: ${err.message}`);
            setIsSubmitting(false);
          },
        });
      } else {
        // User is already authenticated
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
      <div className="max-h-screen mt-10 flex items-center justify-center bg-light-blue relative bottom-[20px]">
        <div className="bg-white p-8 rounded shadow-md w-100 border border-custom-blue">
          <h2 className="mb-6 font-semibold">
            Login to the ICP hackathon platform
          </h2>
          {successMessage && (
            <div className="mt-2 text-green-600 mb-3 text-sm">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mt-2 text-red-600 mb-3 text-sm">{errorMessage}</div>
          )}
          <button
            onClick={handleICLogin}
            disabled={isSubmitting}
            className={`${handleHover()} w-full text-[13px] md:text-[16px] bg-custom-blue text-white py-2 mt-4 rounded`}
          >
            {isSubmitting ? (
              <>
                <CircularProgress sx={{ color: "white" }} size={20} /> Logging in...
              </>
            ) : (
              "Log in with Internet Identity"
            )}
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default LogIn;
