import React, { useState } from "react";
import logo from "../../assets/icp-logo.png";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ openModal }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex md:flex-row py-4 md:py-6 md:justify-between md:items-center navbar">
      
      <div className="flex flex-col items-center">
      <img src={logo} alt="logo" className="ml-5 md:w-32 w-20" />
          <h1>100% on chain</h1> 
        </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden text-black"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div
        className={`absolute md:static flex flex-col md:flex-row w-full md:mt-0 mt-2 md:h-[0] h-[200px] md:flex  md:justify-end md:items-center md:flex-1 md:gap-4 border-t-[2px] border-custom-blue md:border-hidden z-[1] md:z-auto transition-all duration-500 ease-in
         ${
           open
             ? "top-16 opacity-100"
             : "-top-[490px] opacity-0 md:opacity-100"
         }
        `}
      >
        <button
          onClick={() => navigate("/login")}
          className="mt-5 mr-4 px-4 py-2 text-custom-blue text-lg font-semibold bg-white border-2 border-custom-blue rounded-lg shadow-md transition duration-300 hover:bg-custom-blue hover:text-white hover:border-transparent"
        >
          Login
        </button>
        <button
          onClick={() => openModal()}
          className="mt-5 inline-flex rounded-[8px] flex-col items-center justify-center mr-4 p-2 h-10 text-white transition-transform transform bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-pink-500 border-none hover:shadow-xl"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
