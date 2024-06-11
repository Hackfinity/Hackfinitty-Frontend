import React, { useEffect, useState } from "react";
import logo from "../../assets/icp-logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Dashboard");
  const pathnameArray = location.pathname.split("/");
  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setActivePage("dashboard");
    } else if (pathnameArray[2] === "hackathons") {
      setActivePage("hackathons");
    } else if (pathnameArray[2] === "teams-submissions") {
      setActivePage("teams-submissions");
    }
  }, [pathnameArray]);
  return (
    <div className=" flex ">
      <div className="  bg-light-blue p-4 h-screen fixed left-0 top-0 w-[250px] ">
      <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
          <h1>100% on chain</h1> {/* Assuming user profile is available */}
        </div>
        <button
          onClick={() => navigate("/participant/dashboard")}
          style={{
            borderColor: activePage === "dashboard" ? "#089BD9" : "inherit",
            transition: "border-color 0.3s",
          }}
          className="py-2 pl-6 pr-5 border rounded-md   mt-16"
        >
          <div className="flex gap-5">
            <DashboardCustomizeOutlinedIcon className=" w-7 h-7 text-custom-blue " />

            <span className="text-[14px]">Dashboard</span>
          </div>
        </button>

        <button
          onClick={() => navigate("/participant/hackathons")}
          style={{
            borderColor: activePage === "hackathons" ? "#089BD9" : "inherit",
            transition: "border-color 0.3s",
          }}
          className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
        >
          <div className="flex gap-5">
            <LayersOutlinedIcon className=" w-7 h-7 text-custom-blue " />
            <span className="text-[14px]">Hackathons</span>
          </div>
        </button>

        <button
          onClick={() => navigate("/participant/teams-submissions")}
          style={{
            borderColor:
              activePage === "teams-submissions" ? "#089BD9" : "inherit",
            transition: "border-color 0.3s",
          }}
          className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5  "
        >
          <div className="flex gap-4 items-center">
            <FolderOutlinedIcon className=" w-7 h-7 text-custom-blue  " />
            <span className="text-[14px]">
              Teams & <br />
              Submissions
            </span>
          </div>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
