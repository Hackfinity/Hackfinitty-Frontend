import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LinearProgress, CircularProgress } from "@mui/material";
import { selectLoggedInUserRef } from "../../features/user/userSlice";
import UserProfile from "./profile/UserProfile";
//import ProfilePrompt from "../organizers/modals/ProfilePrompt";
//import OpenHackathon from "../hackathon/hackathonDashboard/OpenHackathon";

const ParticipantsContent = () => {
  const [openProfilePrompt, setOpenProfilePrompt] = useState(false);
  const [partProfile, setPartProfile] = useState("");
  const [partCode, setPartCode] = useState("");
  const [fetching, setFetching] = useState(true);
  const [profileStatus, setProfileStatus] = useState("profile");
  const [stats, setStats] = useState({});
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
    <div className="ml-60 p-6 bg-gradient-to-r from-yellow-200 via-purple-200 to-pink-200 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-gray-800 font-bold text-3xl">Dashboard</h1>
        {partCode === "" && fetching ? (
          <CircularProgress />
        ) : (
          <div className="flex items-center gap-6">
            <UserProfile status={profileStatus} />
          </div>
        )}
      </div>

      <div className="flex mt-12 space-x-6">
        <div className="bg-purple-500 text-white rounded-lg shadow-lg p-5 flex flex-col items-start">
          <span className="text-sm mb-2">Your Hackathons</span>
          <p className="text-2xl font-bold">{stats.total_hackathons}</p>
        </div>
        <div className="bg-pink-500 text-white rounded-lg shadow-lg p-5 flex flex-col items-start">
          <span className="text-sm mb-2">Affiliated Organizations</span>
          <p className="text-2xl font-bold">{stats.total_organizers}</p>
        </div>
        <div className="bg-yellow-500 text-white rounded-lg shadow-lg p-5 flex flex-col items-start">
          <span className="text-sm mb-2">Submitted Projects</span>
          <p className="text-2xl font-bold">{stats.total_submissions}</p>
        </div>
      </div>

      <div className="mt-10">
        {partCode === "" && fetching ? (
          <LinearProgress />
        ) : (
          <>
            <h1 className="text-gray-800 font-semibold text-2xl mb-6">
              Recommended Ongoing Hackathons
            </h1>
            <OpenHackathon />
          </>
        )}
      </div>
      <ProfilePrompt openModal={openProfilePrompt} handleClose={closeModal} />
    </div>
  );
};

export default ParticipantsContent;
