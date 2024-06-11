import React, { useState } from "react";
import { LinearProgress, CircularProgress } from "@mui/material";
import OrgHackathons from "./OrgHackathons";
import OrgProfile from "./profile/OrgProfile";
import ProfilePrompt from "./modals/ProfilePrompt";

const OrgDashboard = () => {
  const [openProfilePrompt, setOpenProfilePrompt] = useState(false);
  const [fetching, setFetching] = useState(false);

  // Dummy stats for UI display
  const stats = {
    total_participants: 100,
    total_hackathons: 5,
    total_submissions: 20,
  };

  // Dummy profile data for OrgProfile component
  const dummyProfile = {
    name: "John Doe",
    role: "Organizer",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <div className="bg-white p-8 min-h-screen">
      <div className="overflow-y-auto mx-10">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-600 font-bold text-2xl">Dashboard</h1>
          {fetching ? <CircularProgress /> : <OrgProfile profile={dummyProfile} />}
        </div>
        <div className="flex mt-12 space-x-5">
          <div className="bg-purple-700 text-white rounded-md p-5 flex-1">
            <span className="text-xs">Affiliated Participants</span>
            <p className="text-2xl font-bold">{stats.total_participants}</p>
          </div>
          <div className="bg-purple-300 text-gray-800 rounded-md p-5 flex-1">
            <span className="text-xs">Your Hackathons</span>
            <p className="text-2xl font-bold">{stats.total_hackathons}</p>
          </div>
          <div className="bg-purple-300 text-gray-800 rounded-md p-5 flex-1">
            <span className="text-xs">Submitted Projects</span>
            <p className="text-2xl font-bold">{stats.total_submissions}</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-xl">Ongoing Hackathons</h1>
          {fetching ? <LinearProgress /> : <OrgHackathons />}
        </div>
        <ProfilePrompt
          openModal={openProfilePrompt}
          handleClose={() => setOpenProfilePrompt(false)}
        />
      </div>
    </div>
  );
};

export default OrgDashboard;
