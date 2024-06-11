import React from "react";
import { useNavigate } from "react-router-dom";
import robot2 from '../../assets/robot2.png';
import image404 from '../../assets/404.png';
import icplogo from '../../assets/icp-logo.png';

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center py-5">
        <img src={icplogo} alt="logo" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img src={robot2} className="w-64 md:w-auto relative top-12 md:top-0" alt="robot" />
        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 md:ml-10">
          <img className="w-96 h-auto relative bottom-24 md:bottom-0 md:right-24" src={image404} alt="404 page" />
          <button
            onClick={() => navigate(-1)}
            className="border-2 border-custom-blue rounded-md px-10 py-2 w-40 font-semibold text-sm text-custom-blue mt-5"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
