import React from "react";
import HackathonMedia from "../../utils/HackathonMedia";
import { LinearProgress } from "@mui/material";
import avatar2 from '../../../assets/icons8-climate-64.png';
import avatar1 from '../../../assets/404.png';
import cover1 from '../../../assets/tech.jpg'

const OpenHackathon = () => {
  const loading = false; // Dummy state for loading
  const hackathonsPayload = [
    {
      cover_image_url: cover1,
      avatar_url: avatar1,
      title: "Megathon",
      highlight: "Our first mega hackathon",
      description: "Join us on chain ",
    },
    {
      cover_image_url: avatar2, // Corrected avatar URL
      avatar_url: avatar2, // Corrected avatar URL
      title: "Memethon",
      highlight: "Memecoins",
      description: "you may be the next billionaire",
    },
    // Add more dummy hackathon objects as needed
  ]; // Dummy state for hackathons data

  return (
    <>
      {loading && <LinearProgress />}
      {!loading && (
        <div className="flex flex-wrap space-x-4 mt-5 ml-4 bg-gradient-to-r from-custom-blue to-custom-purple">
        
          {hackathonsPayload.length > 0 &&
            hackathonsPayload.map((field, index) => (
              <div
                key={index}
                className="hover:border-custom-purple relative overflow-hidden border border-[#24143d] rounded-[20px] shadow mb-4 w-[250px] h-[300px] transition-transform transform hover:-translate-y-1"
              >
                <HackathonMedia
                  cover_image_url={field.cover_image_url}
                  avatar_url={field.avatar_url}
                />
                <div className="relative">
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white p-4 rounded-[10px] border-[#24143d] border-t">
                    <p className="text-sm font-bold mt-4 text-[#24143d]">{field.title}</p>
                    <p className="text-sm text-white text-white">{field.highlight}</p>
                    <p className="text-xs text-white mt-2 h-[30px] overflow-hidden ">
                      {field.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 mt-[100px] mb-[20px] ml-[20px] items-center">
                  <button className="border border-custom-purple bg-white rounded-md py-2 hover:bg-custom-blue hover:text-white text-black w-[200px] text-xs">
                    View project
                  </button>
                </div>
              </div>
            ))}
          {hackathonsPayload.length === 0 && (
            <>
              <h1 className="text-gray-600 font-semibold">
                Your profile does not seem to draw any recommendations. Please
                update it below to get hackathons.
              </h1>
              <button className="border-custom-purple text-sm w-[180px] px-2 py-2 rounded border-[2px] font-bold text-custom-blue">
                Update Profile
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default OpenHackathon;
