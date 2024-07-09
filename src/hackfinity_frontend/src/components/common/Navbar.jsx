import React, { useState } from "react";
import logo from "../../assets/icp-logo.png";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ openModal }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg[#b0a3d9] fixed w-full z-10 py-0 px-5">
      <div className="items-center">
        <img src={logo} alt="ICP Hub Logo" className="w-20 md:w-20" />
        <h1 className="text-base md:text-lg font-semibold text-white ml-3 hidden md:block">
          100% on Chain
        </h1>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl cursor-pointer md:hidden text-custom-blue"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div
        className={`absolute md:static top-50 md:top-50 left-0 w-full md:w-auto bg-light-blue md:bg-transparent flex flex-col md:flex-row items-center md:items-center transition-all duration-500 ease-in-out ${
          open ? "opacity-100" : "opacity-0 md:opacity-100"
        }`}
      >
        {/* <button
          onClick={() => navigate("/login")}
          className="mt-2 md:mt-0 md:ml-4 px-9 py-2 text-custom-blue text-sm md:text-base font-semibold bg-white border-2 border-custom-blue rounded-lg shadow-md transition duration-300 hover:bg-blue-900 hover:text-white"
        >
          Login
        </button> */}
        <button
          onClick={openModal}
          className="mt-2 md:mt-0 md:ml-4 px-9 py-2 text-white text-sm md:text-base rounded-lg bg-gradient-to-r from-custom-blue to-purple-500 hover:from-purple-500 hover:to-pink-500 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Sign Up with internet Identity
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
