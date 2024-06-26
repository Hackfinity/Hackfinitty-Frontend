import React from "react";

const BannerVideo = () => {
  return (
    <div className="banner-video-container">
      <video
        className="banner-video md:h-[500px] h-[300px]"
        autoPlay
        loop
        muted
      >
        <source src="../../assets/4389377-hd_2048_1080_30fps.mp4" type="video/mp4" /> {/* Updated source path */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BannerVideo;
