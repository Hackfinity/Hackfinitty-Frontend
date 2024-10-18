import React, { useState } from "react";
import logo from "../../assets/icp-logo.png";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ openModal }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-[#f8f9fa] fixed w-full z-10 py-2 px-4 md:py-3 md:px-6">
      <div className="flex items-center">
        <img src={logo} alt="ICP Hub Logo" className="w-16 md:w-20" />
        <h1 className="text-base md:text-lg font-semibold text-black ml-2  md:block">
          100% on Chain
        </h1>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-2xl cursor-pointer md:hidden text-black"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div
        className={`absolute md:static top-12 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center transition-all duration-500 ease-in-out ${
          open ? "opacity-100" : "opacity-0 md:opacity-100"
        }`}
      >
        <a
          href="#hackathons"
          className="mt-2 md:mt-0 md:ml-4 px-3 py-1.5 text-black text-xs md:text-sm font-semibold rounded-lg transition duration-300 hover:text-gray-800"
        >
          Hackathons
        </a>
        <a
          href="#icp"
          className="mt-2 md:mt-0 md:ml-4 px-3 py-1.5 text-black text-xs md:text-sm font-semibold rounded-lg transition duration-300 hover:text-gray-800"
        >
          About ICP
        </a>
        <a
          href="#community"
          className="mt-2 md:mt-0 md:ml-4 px-3 py-1.5 text-black text-xs md:text-sm font-semibold rounded-lg transition duration-300 hover:text-gray-800"
        >
          Community
        </a>
        <button
          onClick={openModal}
          className="mt-2 md:mt-0 md:ml-4 px-3 py-1.5 text-white text-xs md:text-sm rounded-lg bg-black hover:bg-gray-800 transition duration-300"
        >
          Sign Up with Internet Identity
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
