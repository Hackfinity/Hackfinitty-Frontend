import React, { useEffect, useState } from "react";
import OrgHackathons from "./OrgHackathons";
import { useNavigate } from "react-router-dom";
import OrgProfile from "./profile/OrgProfile";
import { LinearProgress } from "@mui/material";

const OrgHackathonPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-900 p-8 right-side min-h-screen ml-60">
     
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-black-600 font-bold  text-[24px]">Hackathons</h1>
            <OrgProfile />
          </div>
          <button
            onClick={() => navigate("create")}
            className="text-xs bg-custom-purple rounded-lg mt-10 mb-5 border w-[150px] text-white font-semibold p-3"
          >
            Create a hackathon
          </button>
          <span className="text-black-600 font-semibold text-sm ">
            Your Hackathons
          </span>
        </div>
        <OrgHackathons />
      
    </div>
  );
};

export default OrgHackathonPage;