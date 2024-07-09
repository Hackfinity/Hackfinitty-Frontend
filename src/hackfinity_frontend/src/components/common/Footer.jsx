import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import { LinkedIn, YouTube } from "@mui/icons-material";
import icplogo from '../../assets/icp-logo.png';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg[#b0a3d9] text-[#12141D] text-black">
      <div className="text-center  text-xl lg:text-2xl pt-8 font-semibold">
        Ignite innovation today - <br /> sign up now for the ultimate <br /> hackathon experience
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={scrollToTop}
          className="bg-custom-blue hover:bg-custom-blue text-white py-2 px-6 md:py-3 md:px-8 text-sm md:text-lg rounded-md shadow-lg transition-transform transform hover:-translate-y-1"
        >
          Get Started
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16 border-t border-gray-300 pt-10">
        <div className="flex flex-col items-center mb-2 md:mb-0">
          <img src={icplogo} alt="ICP Logo" className="w-12 md:w-18 mb-2" />
          <h1 className="text-sm text-black">100% on chain</h1>
        </div>
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://www.facebook.com/UNITARHQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FacebookIcon className="text-black hover:text-custom-blue" />
          </a>
          <a
            href="https://www.linkedin.com/school/unitarhq"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <LinkedIn className="text-black hover:text-blue-600" />
          </a>
          <a
            href="https://twitter.com/UNITAR"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <TwitterIcon className="text-black hover:text-blue-600" />
          </a>
          <a
            href="https://www.youtube.com/user/UNITARHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <YouTube className="text-black hover:text-custom-blue" />
          </a>
        </div>
      </div>

      <div className="bg[#ebd4e7] py-4 mt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm mb-2 md:mb-0">
            © {currentYear}, All Rights Reserved
          </p>
          <p className="text-xs md:text-sm">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
