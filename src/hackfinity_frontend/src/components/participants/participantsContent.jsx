import React, { useState } from "react";
import { LinearProgress, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoggedInUserRef } from "../features/user/userSlice";
import UserProfile from "./profile/UserProfile";
import ProfilePrompt from "../organizers/modals/ProfilePrompt";
import OpenHackathon from "../hackathon/hackathonDashboard/OpenHackathon";

const ParticipantsContent = () => {
  const [openProfilePrompt, setOpenProfilePrompt] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [partProfile, setPartProfile] = useState({
    name: "John Zimmerman",
    email: "john.zimmer@example.com",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  });
  const [partCode, setPartCode] = useState("dummy_code");
  const [profileStatus, setProfileStatus] = useState("profile");
  const [stats, setStats] = useState({
    total_hackathons: 10,
    total_organizers: 3,
    total_submissions: 15,
  });
  const part_ref = useSelector(selectLoggedInUserRef);

  const handleLogOut = () => {
    // Placeholder for logout logic
    console.log("Logged out");
  };

  const closeModal = () => {
    setOpenProfilePrompt(false);
    handleLogOut();
  };

  return (
    <div className="ml-60 p-6 bg-gradient-to-r bg-light-blue p-8 to-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-gray-800 font-bold text-3xl">Welcome, {partProfile.name}!</h1>
        {partCode === "" && fetching ? (
          <CircularProgress />
        ) : (
          <div className="flex items-center gap-6">
            <UserProfile status={profileStatus} profile={partProfile} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-custom-blue text-white rounded-lg shadow-lg p-5 flex flex-col items-center">
          <span className="text-sm mb-2">Your Hackathons</span>
          <p className="text-2xl font-bold">{stats.total_hackathons}</p>
        </div>
        <div className="bg-purple-500 text-white rounded-lg shadow-lg p-5 flex flex-col items-center">
          <span className="text-sm mb-2">Affiliated Organizations</span>
          <p className="text-2xl font-bold">{stats.total_organizers}</p>
        </div>
        <div className="bg-yellow-500 text-white rounded-lg shadow-lg p-5 flex flex-col items-center">
          <span className="text-sm mb-2">Submitted Projects</span>
          <p className="text-2xl font-bold">{stats.total_submissions}</p>
        </div>
      </div>

      <div className="mt-10">
        {partCode === "" && fetching ? (
          <LinearProgress />
        ) : (
          <>
            <h2 className="text-gray-800 font-semibold text-2xl mb-6">
              Recommended Ongoing Hackathons
            </h2>
            <OpenHackathon />
          </>
        )}
      </div>
      <ProfilePrompt openModal={openProfilePrompt} handleClose={closeModal} />
    </div>
  );
};

export default ParticipantsContent;
