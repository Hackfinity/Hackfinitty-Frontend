// BannerItem.jsx
"use client";
import React from "react";
import FeatureBanner from "./FeatureBanner";
import icon1 from '../../assets/robot2.png';
import technologies from '../../assets/tech.jpg'

const BannerItem = () => {
  return (
    <div className="bg-banner">
      <div className=" flex flex-wrap  gap-4   py-10 px-5">
        <FeatureBanner
          icon={icon1}
          heading="Employment and Livelihoods Development"
          text="Foster solutions that contribute to the development of sustainable employment opportunities and the enhancement of livelihoods.

          "
        />

        <FeatureBanner
          icon={technologies}
          heading="Emerging Technologies"
          text=" Encourage the exploration and development of cutting-edge technologies that have the potential to transform industries."
        />
        <FeatureBanner
          icon="/assets/icon5.png"
          heading="Climate Change"
          text=" Foster solutions that contribute to mitigating the impact of climate change and promoting environmental sustainability.

          "
        />
        <FeatureBanner
          icon="/assets/icon3.png"
          heading="Accessibility and Inclusion"
          text=" Advocate for projects that prioritize accessibility and inclusion for all individuals, regardless of abilities."
        />

        <FeatureBanner
          icon="/assets/icon4.png"
          heading="Social Impact"
          text="Promote solutions that address social challenges and have a positive impact on communities."
        />
      </div>
    </div>
  );
};

export default BannerItem;