// LandingPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BasicModal from "./SignUpModal";
import BannerVideo from "./BannerVideo";
import ImageCarousel from "./ImageCaurosel";
import BannerItem from "./BannerItem";
import Footer from "./Footer";
import Hackathons from "../common/hacks"; // Import Hackathons component
import avatar1 from '../../assets/maria.jpg';
import avatar2 from '../../assets/Herbert_Portrait.jpg';
import box from '../../assets/box.jpg';
import dev from '../../assets/dev.jpg';
import image3 from '../../assets/DFINITY_logo_-_dark-removebg-preview.png';
import { pastHackathons, incomingHackathons, ongoingHackathons } from '../common/hackathonData'; // Import hackathon data

const LandingPage = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [showChoiceModal, setShowChoiceModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setOpenSignUpModal(true);
  const closeModal = () => setOpenSignUpModal(false);
  
  const openChoiceModal = () => setShowChoiceModal(true);
  const closeChoiceModal = () => setShowChoiceModal(false);

  const handleChoice = (type) => {
    closeChoiceModal();
    navigate(`/${type}-signup`);
  };

  const orgSlides = [
    {
      image: box,
      title: "Tap into Talent",
      description: `Discover the next generation of innovators. Post your hackathon
      on ICP and connect with a global pool of talent. Watch as
      diverse teams bring fresh perspectives to your challenges.
      Leverage the creativity and problem-solving abilities of students,
      professionals, and hobbyists from around the world, all eager to
      showcase their skills and solutions.`,
    },
    {
      image: dev,
      title: "Drive Innovation",
      description: `Challenge participants with real-world problems and witness
      groundbreaking solutions. Fuel innovation within your
      organization and be at the forefront of industry advancements.
      From prototype development to full-scale projects, harness the
      collective genius of participants to push the boundaries of
      what's possible in your field.`,
    },
    {
      image: image3,
      title: "Boost Your Brand",
      description: `Associate your organization with innovation. Be a catalyst for
      change and join a community that values pushing the boundaries of
      what's possible. Enhance your brand's visibility and reputation by
      sponsoring or hosting hackathons, and demonstrate your commitment
      to fostering a culture of innovation and technological progress.`,
    },
  ];

  const slides = [
    {
      image: box,
      title: "Unlock Your Potential",
      description: `Discover the power of technology to transform society. Join ICP
      hackathons and unleash your creativity in solving global challenges.
      Take part in events that focus on sustainability, healthcare, education,
      and more, where your ideas can make a real difference. Learn new skills,
      collaborate with experts, and push the limits of your capabilities.`,
    },
    {
      image: dev,
      title: "Forge Connections",
      description: `Connect with diverse minds worldwide in ICP hackathons.
      Collaborate across borders to create innovative solutions that make a
      difference. Build lasting relationships with fellow participants, mentors,
      and industry leaders. Expand your professional network and open doors to
      future opportunities in the tech community.`,
    },
    {
      image: image3,
      title: "Fostering Diversity for Inclusive Solutions",
      description: `Embrace diversity and inclusion in tech with ICP. Explore varied
      perspectives that drive innovation and create meaningful impact globally.
      Participate in a welcoming environment where individuals from different
      backgrounds come together to share ideas and build inclusive solutions.
      Experience the power of collaboration in a diverse community.`,
    },
    {
      image: dev,
      title: "Showcase Your Skills",
      description: `Demonstrate your expertise in technology and innovation. Participate
      in ICP hackathons to showcase your talents and gain recognition. Compete
      with peers, receive feedback from industry professionals, and have the
      chance to win prizes and awards. Use these platforms to highlight your
      achievements and boost your career prospects.`,
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 bg-[#f5f5f5] relative">
      <Navbar openModal={openModal} />
      <BasicModal openModal={openSignUpModal} handleClose={closeModal} />

      {/* Hero Section */}
      <div className="pt-16 w-full h-screen flex flex-col items-center justify-center text-center bg-[#f5f5f5]">
        <div className="relative mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
              Unleashing Innovation,<br />One Hackathon at a Time!
            </h1>
            <p className="text-sm md:text-base lg:text-lg mt-4 md:mt-6 text-gray-700 max-w-xl">
              Join a global community of thinkers, dreamers, and doers. Whether you're here to conquer challenges or host groundbreaking hackathons, this is where innovation takes center stage.
            </p>
            <button
              onClick={openChoiceModal}
              className="px-6 py-3 bg-[#96C9F4] rounded-lg text-[16px] md:text-[18px] text-black font-semibold transition-transform transform hover:bg-[#75a5d3] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#96C9F4] focus:ring-opacity-50"
            >
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={dev}
              alt="Innovation"
              className="rounded-lg shadow-lg object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Choice Modal */}
      {showChoiceModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 md:w-96 text-center">
            <h2 className="text-lg font-bold mb-4">Are you an Organizer or a Participant?</h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleChoice("part")}
                className="px-4 py-2 bg-[#96C9F4] rounded-lg text-black font-semibold transition-transform transform hover:bg-[#75a5d3] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#96C9F4] focus:ring-opacity-50"
              >
                Participant
              </button>
              <button
                onClick={() => handleChoice("org")}
                className="px-4 py-2 border-2 border-[#96C9F4] rounded-lg text-[#96C9F4] font-semibold transition-transform transform hover:bg-[#96C9F4] hover:text-black hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#96C9F4] focus:ring-opacity-50"
              >
                Organizer
              </button>
              <button
                onClick={closeChoiceModal}
                className="px-4 py-2 mt-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner Items */}
      <section className="mt-16 mb-20">
        <div className="mt-10">
          <BannerItem />
        </div>
      </section>

      {/* Banner Video */}
      <div className="mt-6">
        <BannerVideo />
      </div>

      {/* Hackathons Section */}
      <div className="mt-6">
        <Hackathons
          pastHackathons={pastHackathons}
          incomingHackathons={incomingHackathons}
          ongoingHackathons={ongoingHackathons}
        />
      </div>

      <Footer />

      {/* Back to Top Button */}
      <button
        className="fixed bottom-5 right-5 bg-[#96C9F4] text-black p-2 rounded shadow-lg hover:bg-[#75a5d3] transition-transform transform hover:-translate-y-1"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </button>
    </div>
  );
};

export default LandingPage;
