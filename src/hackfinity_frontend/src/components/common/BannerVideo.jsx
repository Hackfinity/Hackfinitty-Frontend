import React from "react";
import video from '../../assets/4389377-hd_2048_1080_30fps.mp4'

const BannerVideo = () => {
  return (
    <div className="banner-video-container ">
      <video
        className="banner-video md:h-[600px] h-[300px]"
        autoPlay
        loop
        muted
      >
        <source src={video} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BannerVideo;