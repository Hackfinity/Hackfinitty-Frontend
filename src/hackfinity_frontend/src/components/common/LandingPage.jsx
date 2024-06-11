import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BasicModal from "./SignUpModal";
import BannerVideo from "./BannerVideo";
import ImageCarousel from "./ImageCaurosel";
import BannerItem from "./BannerItem";
import Footer from "./Footer";
import avatar1 from '../../assets/maria.jpg';
import avatar2 from '../../assets/Herbert_Portrait.jpg';
import CubeAnimation from "./SpinningCube";

const LandingPage = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const openModal = () => setOpenSignUpModal(true);
  const closeModal = () => setOpenSignUpModal(false);
  const navigate = useNavigate();

  const orgSlides = [
    {
      image: "https://internetcomputer.org/capabilities",
      title: "Tap into Talent",
      description: `Discover the next generation of innovators. Post your hackathon
      on ICP and connect with a global pool of talent. Watch as
      diverse teams bring fresh perspectives to your challenges.`,
    },
    {
      image: "https://internetcomputer.org/capabilities",
      title: "Drive Innovation",
      description: `Challenge participants with real-world problems and witness
      groundbreaking solutions. Fuel innovation within your
      organization and be at the forefront of industry advancements.`,
    },
    {
      image: "https://unitarmedia.blob.core.windows.net/data/carouselImg1c.jpg",
      title: "Boost Your Brand",
      description: `Associate your organization with innovation. Be a catalyst for
      change and join a community that values pushing the boundaries of
      what's possible.`,
    },
  ];

  const slides = [
    {
      image: "https://unitarmedia.blob.core.windows.net/data/carouselImg3c.jpg",
      title: "Unlock Your Potential",
      description: `Dive into a world of endless possibilities. Browse through a
      diverse range of hackathons hosted by top-notch organizations.
      Whether you're a coding prodigy, a design virtuoso, or a
      problem-solving guru, there's a hackathon just for you.`,
    },
    {
      image: "https://unitarmedia.blob.core.windows.net/data/carouselImg2c.jpg",
      title: "Forge Connections",
      description: `Connect with diverse minds from around the globe. Form teams that
      blend expertise, creativity, and drive. Together, you'll redefine
      what's possible.`,
    },
    {
      image: "https://unitarmedia.blob.core.windows.net/data/carouselImg1c.jpg",
      title: "Fostering Diversity for Inclusive Solutions",
      description: `Explore the dynamic landscape of diversity in the tech industry, where varied perspectives drive innovation. Join us on a journey of building solutions that transcend barriers, creating meaningful impact for people around the globe. Together, let's shape a future where technology serves as a catalyst for positive change, improving the lives of individuals and communities worldwide.`,
    },
    {
      image: "https://unitarmedia.blob.core.windows.net/data/carouselImg4c.jpg",
      title: "Showcase Your Skills",
      description: `Make your mark in the tech and innovation landscape. Showcase your
      talents through innovative solutions, and grab the attention of
      potential employers and collaborators.`,
    },
  ];

  return (
    <div className="bg-yellowish-purple">
      <Navbar openModal={openModal} />
      <BasicModal openModal={openSignUpModal} handleClose={closeModal} />
      <div className="w-full h-screen text-center bg-pinkish">
        <div className="relative mx-auto p-2 flex justify-center">
          <div className="md:mt-[60px] mt-5">
            <h1 className="text-[24px] animate-text text-black md:text-4xl lg:text-6xl font-extrabold tracking-wider px-3 text-custom-blue">
              Unleashing Innovation, <br />One Hackathon at a Time!
            </h1>
            <p className="text-[12px] mt-4 md:text-[18px] md:w-[588px] md:mt-7 lg:ml-20 text-gray-700 text-custom-blue">
              Join a global community of thinkers, dreamers, and doers. Whether you're here to conquer challenges or host groundbreaking hackathons, this is where innovation takes center stage.
            </p>
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center mt-5 md:mt-[100px]">
          <button
            onClick={() => navigate("/part-signup")}
            className="px-3 py-2 bg-custom-blue rounded text-[13px] md:text-[18px] text-white md:py-4 md:px-[20px] md:w-[239px] transition-transform transform hover:-translate-y-1"
          >
            For Participants
          </button>
          <button
            onClick={() => navigate("/org-signup")}
            className="px-3 py-2 text-[13px] md:text-[18px] md:py-4 md:px-[20px] rounded border-2 md:w-[239px] border-custom-blue transition-transform transform hover:-translate-y-1"
          >
            For Organisers
          </button>
        </div>
        <div className="hidden lg:block absolute rounded-full filter bottom-[180px] right-[140px] animate-text">
          <img
            src={avatar1}
            className="rounded-full border-2 border-pink-700 w-[80px] h-[80px] object-cover"
            alt="Avatar"
          />
        </div>
        <div className="hidden lg:block absolute rounded-full bottom-[80px] left-[150px] animate-text">
          <img
            src={avatar2}
            className="rounded-full border-2 border-red-700 w-[80px] h-[80px] object-cover"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="mt-6">
      <CubeAnimation /> 
      </div>
      <section className="mt-10">
        <div className="max-w-xl mx-auto my-6 py-4 rounded-lg shadow-md border-2 border-custom-blue transition-transform transform hover:scale-105">
          <h2 className="text-center text-custom-blue text-1l md:text-4l font-bold">
            FOR PARTICIPANTS
          </h2>
        </div>
        <div className="mt-6">
          <ImageCarousel slides={slides} />
        </div>
      </section>
      <div className="max-w-xl mx-auto my-6 py-4 rounded-lg shadow-md border border-custom-blue transition-transform transform hover:scale-105">
        <h2 className="text-center text-custom-blue text-1l md:text-4l font-bold">
          FOR ORGANIZERS
        </h2>
      </div>
      <section className="mt-10">
        <div className="mt-6">
          <ImageCarousel slides={orgSlides} />
        </div>
      </section>
      <section className="mt-10 mb-20">
        <h2 className="text-center text-custom-blue text-3xl md:text-5xl font-bold tracking-wider">
          ICP HACKATHON THEMES
        </h2>
        <div className="mt-10">
          <BannerItem />
        </div>
      </section>
      <Footer />
      <button
        className="fixed bottom-5 right-5 bg-custom-blue text-white p-2 rounded shadow hover:bg-blue-700 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </button>
    </div>
  );
};

export default LandingPage;
