import React, { useState, useEffect } from "react";
import { LinearProgress, CircularProgress } from "@mui/material";
import OrgHackathons from "./OrgHackathons";
import OrgProfile from "./profile/OrgProfile";
import ProfilePrompt from "./modals/ProfilePrompt";

const OrgDashboard = () => {
  const [openProfilePrompt, setOpenProfilePrompt] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Dummy stats for UI display
  const stats = {
    total_participants: 100,
    total_hackathons: 5,
    total_submissions: 20,
  };

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      // Data fetching completed
      setFetching(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-white p-8 right-side min-h-screen">
      <div className="overflow-y-auto ml-60">
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-bold text-[24px]">Dashboard</h1>
          {fetching ? <CircularProgress /> : <OrgProfile />}
        </div>
        <div className="flex mt-12">
          <div className="border bg-custom-blue rounded-md text-white pt-5 mr-5 pr-[40px]">
            <span className="text-xs p-5">Affiliated Participants</span>
            <p className="p-5 font-bold">{stats.total_participants}</p>
          </div>
          <div className="border bg-custom-grey rounded-md pr-[60px] pt-5 mr-5">
            <span className="text-xs p-5">Your Hackathons</span>
            <p className="p-5 font-bold">{stats.total_hackathons}</p>
          </div>
          <div className="border bg-custom-grey rounded-md pr-[60px] pt-5 mr-5">
            <span className="text-xs p-5">Submitted Projects</span>
            <p className="p-5 font-bold">{stats.total_submissions}</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold">Ongoing hackathons</h1>
          {fetching ? <LinearProgress /> : <OrgHackathons />}
        </div>
        <div>
          <ProfilePrompt
            openModal={openProfilePrompt}
            handleClose={() => setOpenProfilePrompt(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default OrgDashboard;
