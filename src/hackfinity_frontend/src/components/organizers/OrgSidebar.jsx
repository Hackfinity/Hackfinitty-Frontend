import React, { useState, useEffect } from "react";
import logo from "../../assets/icp-logo.png";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { Grading } from "@mui/icons-material";

const OrgSidebar = () => {
  const [activePage, setActivePage] = useState("dashboard"); // Default active page
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");

  useEffect(() => {
    // Determine active page based on pathname
    switch (pathnameArray[2]) {
      case undefined:
      case "dashboard":
        setActivePage("dashboard");
        break;
      case "hackathons":
        setActivePage("hackathons");
        break;
      case "submissions":
        setActivePage("submissions");
        break;
      case "grades":
        setActivePage("grades");
        break;
      default:
        setActivePage("dashboard");
    }
  }, [pathnameArray]);

  const handleButtonClick = (page) => {
    // Set active page and navigate to corresponding route
    setActivePage(page);
    navigate(`/organizer/${page}`);
  };

  return (
    <div className="flex bg-light-blue">
      <div className="bg-gradient-to-r from-custom-blue to-custom-purple w-[250px] p-5 h-screen fixed left-0 top-0">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
          <h1 className="text-white text-xl">100% on chain</h1>
        </div>

        <SidebarButton
          onClick={() => handleButtonClick("dashboard")}
          active={activePage === "dashboard"}
          icon={<DashboardCustomizeOutlinedIcon className="w-5 h-5 text-white" />}
          label="Dashboard"
        />

        <SidebarButton
          onClick={() => handleButtonClick("hackathons")}
          active={activePage === "hackathons"}
          icon={<LayersOutlinedIcon className="w-5 h-5 text-white" />}
          label="Hackathons"
        />

        <SidebarButton
          onClick={() => handleButtonClick("submissions")}
          active={activePage === "submissions"}
          icon={<FolderOutlinedIcon className="w-5 h-5 text-white" />}
          label="Submissions"
        />

        <SidebarButton
          onClick={() => handleButtonClick("grades")}
          active={activePage === "grades"}
          icon={<Grading className="w-5 h-5 text-white" />}
          label="Grades"
        />
      </div>
      <Outlet />
    </div>
  );
};

const SidebarButton = ({ onClick, active, icon, label }) => (
  <button
    onClick={onClick}
    className={`py-2 pl-4 pr-5 border rounded-md mt-3 ${active ? "border-white" : ""}`}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-sm text-white">{label}</span>
    </div>
  </button>
);

export default OrgSidebar;
