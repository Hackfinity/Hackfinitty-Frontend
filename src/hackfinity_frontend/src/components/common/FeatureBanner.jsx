import React from "react";

const FeatureBanner = ({ icon, backgroundColor, heading, text }) => {
  return (
    <div className="banner-container lg:w-1/4 w-full" style={{ backgroundColor }}>
      <div className="flex bg-[#e0e0e0] rounded w-[60px] h-[60px] px-2 py-2">
        {icon}
      </div>

      <h4 className="text-custom-black text-[12px] md:text-lg text-left font-inter font-bold mt-4">
        {heading}
      </h4>
      <p className="text-white flex flex-wrap text-[10px] md:text-[14px] text-left mt-2">
        {text}
      </p>
    </div>
  );
};

export default FeatureBanner;
