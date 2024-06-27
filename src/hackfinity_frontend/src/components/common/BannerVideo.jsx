import React from "react";

const BannerVideo = () => {
  return (
    <div className="banner-video-container flex justify-center py-8">
      <div className="relative overflow-hidden w-full max-w-4xl h-0 pb-[56.25%]"> {/* 16:9 aspect ratio, max width */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/2jKSpqvECds"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BannerVideo;
