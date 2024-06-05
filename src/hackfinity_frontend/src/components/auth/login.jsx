import React, { useState } from "react";
import Navbar from "../common/Navbar";
import { useNavigate, Link } from "react-router-dom";
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

  const handleICLogin = async () => {
    setIsSubmitting(true);
    try {
      const authClient = await AuthClient.create();
      await authClient.login({
        onSuccess: async () => {
          const identity = authClient.getIdentity();

          // Assuming the identity object contains the necessary role information
          const role = identity.getRole();

          setSuccessMessage("Login successful!");
          setIsSubmitting(false);

          // You may need to adapt these lines based on how you store user information
          dispatch(setAccessToken({ accessToken: null }));
          dispatch(setLoggedInUserRef({ loggedInUserRef: null }));
          dispatch(setCurrentUserRole({ currentUserRole: role }));
          handleHome(role);
        },
        onError: (err) => {
          setErrorMessage(`Login failed: ${err.message}`);
          setIsSubmitting(false);
        },
      });
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
      <div className="max-h-screen mt-10 flex items-center justify-center  bg-light-blue relative bottom-[20px]">
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
            className={`${handleHover()} w-full text-[13px] md:text-[16px] bg-custom-blue text-white py-2 mt-4 rounded hover:bg-white hover:text-custom-blue hover:border-2 hover:border-custom-blue`}
          >
            {isSubmitting ? (
              <>
                <CircularProgress sx={{ color: "white" }} size={20} /> Logging in...
              </>
            ) : (
              "Log in with Internet Identity"
            )}
          </button>
          <p className="mt-5 md:text-[16px] text-gray-600 text-[10px]">
            Don't have an account?
            <Link
              to="/signup"
              className="text-custom-blue ml-1 md:text-[16px] text-[10px]"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
