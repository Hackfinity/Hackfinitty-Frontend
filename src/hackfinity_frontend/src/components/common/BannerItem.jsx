import React from "react";
import FeatureBanner from "./FeatureBanner";
import { FaMoneyBillWave, FaCube, FaLeaf, FaFingerprint, FaHandsHelping } from "react-icons/fa";

const BannerItem = () => {
  return (
    <div className="bg-banner py-10">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-bold text-custom-black tracking-wider">
            ICP Hackathon Themes
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureBanner
            icon={<FaMoneyBillWave size={64} color="#9370DB" />}
            heading="Decentralized Finance (DeFi)"
            text="Develop innovative solutions that enhance financial inclusivity, security, and accessibility using blockchain technology."
          />
          <FeatureBanner
            icon={<FaCube size={64} color="#9370DB" />}
            bg-custom-color // Very light purple
            heading="Web3 and Decentralization"
            text="Explore the future of the internet with decentralized applications and platforms that empower users with more control and privacy."
          />
          <FeatureBanner
            icon={<FaLeaf size={64} color="#9370DB" />}
            heading="Sustainability and Green Tech"
            text="Create projects that address environmental challenges and promote sustainability through innovative technology."
          />
          <FeatureBanner
            icon={<FaFingerprint size={64} color="#9370DB" />}
            heading="Digital Identity"
            text="Advance the development of secure, user-controlled digital identity solutions that protect privacy and enhance trust."
          />
          <FeatureBanner
            icon={<FaHandsHelping size={64} color="#9370DB" />}
            heading="Social Good and Impact"
            text="Promote tech-driven solutions that tackle social issues and create a positive impact in communities worldwide."
          />
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
