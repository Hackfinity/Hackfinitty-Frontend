import React, { useState, useEffect } from "react";
import logo from "../../assets/icp-logo.png";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { Grading } from "@mui/icons-material";

const OrgSidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");

  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setActivePage("dashboard");
    } else if (pathnameArray[2] === "hackathons") {
      setActivePage("hackathons");
    } else if (pathnameArray[2] === "submissions") {
      setActivePage("submissions");
    } else if (pathnameArray[2] === "grades") {
      setActivePage("grades");
    }
  }, [pathnameArray]);

  const handleButtonClick = (page) => {
    setActivePage(page);
    navigate(`/organizer/${page}`);
  };

  return (
    <div className="flex">
      <div className="bg-light-blue w-[250px] p-5 h-screen fixed left-0 top-0">
      <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
          <h1>100% on chain</h1> 
        </div>
        <button
          onClick={() => handleButtonClick("dashboard")}
          className={`py-2 pl-4 pr-5 border rounded-md mt-8 ${
            activePage === "dashboard" && "border-custom-blue"
          }`}
        >
          <div className="flex items-center gap-3">
            <DashboardCustomizeOutlinedIcon className="w-5 h-5 text-custom-blue" />
            <span className="text-sm">Dashboard</span>
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("hackathons")}
          className={`py-2 pl-4 pr-5 border rounded-md mt-3 ${
            activePage === "hackathons" && "border-custom-blue"
          }`}
        >
          <div className="flex items-center gap-3">
            <LayersOutlinedIcon className="w-5 h-5 text-custom-blue" />
            <span className="text-sm">Hackathons</span>
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("submissions")}
          className={`py-2 pl-4 pr-5 border rounded-md mt-3 ${
            activePage === "submissions" && "border-custom-blue"
          }`}
        >
          <div className="flex items-center gap-3">
            <FolderOutlinedIcon className="w-5 h-5 text-custom-blue" />
            <span className="text-sm">Submissions</span>
          </div>
        </button>

        <button
          onClick={() => handleButtonClick("grades")}
          className={`py-2 pl-4 pr-5 border rounded-md mt-3 ${
            activePage === "grades" && "border-custom-blue"
          }`}
        >
          <div className="flex items-center gap-3">
            <Grading className="w-5 h-5 text-custom-blue" />
            <span className="text-sm">Grades</span>
          </div>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default OrgSidebar;
