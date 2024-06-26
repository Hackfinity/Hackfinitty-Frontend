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
import box from '../../assets/box.jpg'
import dev from '../../assets/dev.jpg'
import image3 from '../../assets/DFINITY_logo_-_dark-removebg-preview.png';

const LandingPage = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const openModal = () => setOpenSignUpModal(true);
  const closeModal = () => setOpenSignUpModal(false);
  const navigate = useNavigate();

  const orgSlides = [
    {
      image: box,
      title: "Tap into Talent",
      description: `Discover the next generation of innovators. Post your hackathon
      on ICP and connect with a global pool of talent. Watch as
      diverse teams bring fresh perspectives to your challenges.`,
    },
    {
      image: dev,
      title: "Drive Innovation",
      description: `Challenge participants with real-world problems and witness
      groundbreaking solutions. Fuel innovation within your
      organization and be at the forefront of industry advancements.`,
    },
    {
      image: image3,
      title: "Boost Your Brand",
      description: `Associate your organization with innovation. Be a catalyst for
      change and join a community that values pushing the boundaries of
      what's possible.`,
    },
  ];

  const slides = [
    {
      image: box,
      title: "Unlock Your Potential",
      description: `Discover the power of technology to transform society. Join ICP hackathons and unleash your creativity in solving global challenges.`,
    },
    {
      image: dev,
      title: "Forge Connections",
      description: `Connect with diverse minds worldwide in ICP hackathons. Collaborate across borders to create innovative solutions that make a difference.`,
    },
    {
      image: image3,
      title: "Fostering Diversity for Inclusive Solutions",
      description: `Embrace diversity and inclusion in tech with ICP. Explore varied perspectives that drive innovation and create meaningful impact globally.`,
    },
    {
      image: dev,
      title: "Showcase Your Skills",
      description: `Demonstrate your expertise in technology and innovation. Participate in ICP hackathons to showcase your talents and gain recognition.`,
    },
  ];
  

  return (
    <div className="bg[#F5E1FF] min-h-screen">
      <Navbar openModal={openModal} />
      <BasicModal openModal={openSignUpModal} handleClose={closeModal} />
      <div className="w-full h-screen text-center bg[#F5E1FF]">
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
        <BannerVideo/>
      </div>
      <section className="mt-10">
        <div>
          <h2 className="text-center text-black text-1l md:text-4l font-bold">
            FOR PARTICIPANTS
          </h2>
        </div>
        <div className="mt-6">
          <ImageCarousel slides={slides} carouselHeight="500px"  />
        </div>
      </section>
      <div>
        <h2 className="text-center text-black text-1l md:text-4l font-bold">
          FOR ORGANIZERS
        </h2>
      </div>
      <section className="mt-10 text-center">
        <div className="mt-6">
          <ImageCarousel slides={orgSlides} carouselHeight="500px" />
        </div>
      </section>
      <section className="mt-10 mb-20">
       
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
