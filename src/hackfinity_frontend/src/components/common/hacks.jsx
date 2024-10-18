import React, { useState, useEffect } from 'react';
import { pastHackathons, incomingHackathons, ongoingHackathons } from './hackathonData';
import '../styles/style.css'

const Hackathons = () => {
  const [timeLeft, setTimeLeft] = useState('');

  const calculateTimeLeft = (date) => {
    const eventDate = new Date(date);
    const difference = eventDate - new Date();
    let timeLeft = '';

    if (difference > 0) {
      timeLeft = `${Math.floor(difference / (1000 * 60 * 60 * 24))}d ${Math.floor((difference / (1000 * 60 * 60)) % 24)}h ${Math.floor((difference / 1000 / 60) % 60)}m ${Math.floor((difference / 1000) % 60)}s`;
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(new Date())); // Pass a specific date if needed
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const sectionStyle = "mb-12";
  const titleStyle = "text-4xl font-bold mb-6 text-orange-600"; // Updated color
  const gridStyle = "grid grid-cols-1 gap-12"; // Updated for single hackathon per row
  const cardStyle = "p-4 rounded-lg flex flex-col md:flex-row items-start md:items-center md:space-x-6 border border-gray-300"; // Removed background color
  const imageStyle = "w-full md:w-1/2 h-64 object-cover rounded-lg"; // Adjusted to fit more space
  const contentStyle = "w-full md:w-1/2 mt-4 md:mt-0";
  const headingStyle = "font-bold text-3xl mb-4 text-orange-600"; // Updated color
  const textStyle = "text-gray-700 mb-3 text-base"; // Uniform font size
  const buttonStyle = "bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 mt-4 text-base"; // Uniform font size


  const imageContainerStyle = "flex flex-col md:flex-row items-start md:items-center md:space-x-8 w-full"; // New container style

  return (
    <div className="p-8 md:p-10 lg:p-12 bg-white">
      <section className={sectionStyle}>
        <h1 className={titleStyle}>Past Hackathons</h1>
        <div className={gridStyle}>
          {pastHackathons.map((hackathon, index) => (
            <div key={index} className={cardStyle}>
              <div className={imageContainerStyle}>
                <img
                  src={hackathon.image}
                  alt={hackathon.name}
                  className={imageStyle}
                />
                <div className="w-full md:w-1/2">
                  {/* Winners Sections */}
                  {hackathon.grandWinners && (
                    <>
                      <h3 className="font-semibold text-2xl mb-4 text-green-600">🏆 Grand Winners:</h3>
                      <div className="flex flex-wrap mb-8">
                        {hackathon.grandWinners.map((winner) => (
                          <div key={winner.id} className="flex items-center mb-4 w-full p-3 border-b border-gray-300">
                            <span className="font-bold text-lg">{winner.name}</span>: {winner.project} - {winner.details}
                            {winner.projectLink && (
                              <a
                                href={winner.projectLink}
                                className="ml-2 text-blue-500 hover:underline text-lg"
                              >
                                View Project
                              </a>
                            )}
                            {' 🥇'}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {hackathon.firstRunnersUp && (
                    <>
                      <h3 className="font-semibold text-2xl mb-4 text-green-600">🥈 1st Runners-Up:</h3>
                      <div className="flex flex-wrap mb-8">
                        {hackathon.firstRunnersUp.map((winner) => (
                          <div key={winner.id} className="flex items-center mb-4 w-full p-3 border-b border-gray-300">
                            <span className="font-bold text-lg">{winner.name}</span>: {winner.project} - {winner.details}
                            {winner.projectLink && (
                              <a
                                href={winner.projectLink}
                                className="ml-2 text-blue-500 hover:underline text-lg"
                              >
                                View Project
                              </a>
                            )}
                            {' 🥈'}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {hackathon.secondRunnersUp && (
                    <>
                      <h3 className="font-semibold text-2xl mb-4 text-green-600">🥉 2nd Runners-Up:</h3>
                      <div className="flex flex-wrap mb-8">
                        {hackathon.secondRunnersUp.map((winner) => (
                          <div key={winner.id} className="flex items-center mb-4 w-full p-3 border-b border-gray-300">
                            <span className="font-bold text-lg">{winner.name}</span>: {winner.project} - {winner.details}
                            {winner.projectLink && (
                              <a
                                href={winner.projectLink}
                                className="ml-2 text-blue-500 hover:underline text-lg"
                              >
                                View Project
                              </a>
                            )}
                            {' 🥉'}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {hackathon.additionalWinners && (
                    <>
                      <h3 className="font-semibold text-2xl mb-4 text-green-600">🏅 Additional Winners:</h3>
                      <div className="flex flex-wrap">
                        {hackathon.additionalWinners.map((winner) => (
                          <div key={winner.id} className="flex items-center mb-4 w-full p-3 border-b border-gray-300">
                            <span className="font-bold text-lg">{winner.name}</span>: {winner.project} - {winner.details}
                            {winner.category && <span className="ml-2 text-gray-600 text-lg">({winner.category})</span>}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className={contentStyle}>
                <h2 className={headingStyle}>{hackathon.name} 🎉</h2>
                <p className={textStyle}><span className="font-bold">Date:</span> {hackathon.date}</p>
                {hackathon.location && <p className={textStyle}><span className="font-bold">Location:</span> {hackathon.location}</p>}
                {hackathon.type && (
                  <p className={textStyle}>
                    <span className="font-bold">Type:</span> {hackathon.type === 'online' ? 'Online' : hackathon.type === 'physical' ? 'Physical' : 'Both'}
                  </p>
                )}
                {hackathon.description && (
                  <p className={textStyle}>
                    <span className="font-bold">Description:</span> {hackathon.description}
                  </p>
                )}
                {hackathon.bounties && <p className={textStyle}><span className="font-bold">Bounties:</span> {hackathon.bounties}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionStyle}>
        <h1 className={titleStyle}>Incoming Hackathons</h1>
        <div className={gridStyle}>
          {incomingHackathons.map((hackathon, index) => (
            <div key={index} className={cardStyle}>
              <div className={imageContainerStyle}>
                <img
                  src={hackathon.image}
                  alt={hackathon.name}
                  className={imageStyle}
                />
                <div className="w-full md:w-1/2">
                  {/* No winners for incoming hackathons, but if needed, add here */}
                </div>
              </div>
              <div className={contentStyle}>
                <h2 className={headingStyle}>{hackathon.name} 🎉</h2>
                <p className={textStyle}><span className="font-bold">Date:</span> {hackathon.date}</p>
                {hackathon.location && <p className={textStyle}><span className="font-bold">Location:</span> {hackathon.location}</p>}
                {hackathon.type && (
                  <p className={textStyle}>
                    <span className="font-bold">Type:</span> {hackathon.type === 'online' ? 'Online' : hackathon.type === 'physical' ? 'Physical' : 'Both'}
                  </p>
                )}
                {hackathon.description && (
                  <p className={textStyle}>
                    <span className="font-bold">Description:</span> {hackathon.description}
                  </p>
                )}
                {hackathon.registrationLink && (
                  <a
                    href={hackathon.registrationLink}
                    className="block text-blue-500 hover:underline mt-6 text-lg"
                  >
                    Register Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionStyle}>
        <h1 className={titleStyle}>Ongoing Hackathons</h1>
        <div className={gridStyle}>
          {ongoingHackathons.map((hackathon, index) => (
            <div key={index} className={cardStyle}>
              <div className={imageContainerStyle}>
                <img
                  src={hackathon.image}
                  alt={hackathon.name}
                  className={imageStyle}
                />
                <div className="w-full md:w-1/2">
                  {/* No winners for ongoing hackathons, but if needed, add here */}
                </div>
              </div>
              <div className={contentStyle}>
                <h2 className={headingStyle}>{hackathon.name} 🎉</h2>
                <p className={textStyle}><span className="font-bold">Date:</span> {hackathon.date}</p>
                {hackathon.location && <p className={textStyle}><span className="font-bold">Location:</span> {hackathon.location}</p>}
                {hackathon.type && (
                  <p className={textStyle}>
                    <span className="font-bold">Type:</span> {hackathon.type === 'online' ? 'Online' : hackathon.type === 'physical' ? 'Physical' : 'Both'}
                  </p>
                )}
                {hackathon.description && (
                  <p className={textStyle}>
                    <span className="font-bold">Description:</span> {hackathon.description}
                  </p>
                )}
                {hackathon.registrationLink && (
                  <a
                    href={hackathon.registrationLink}
                    className="block text-blue-500 hover:underline mt-6 text-lg"
                  >
                    Register Now
                  </a>
                )}
                <div className="mt-6">
                  <button
                    onClick={() => window.location.href = '/login'}
                    className={buttonStyle}
                  >
                    Join
                  </button>
                  <div className="text-red-600 font-semibold mt-4 text-lg">
                    Time Left: {calculateTimeLeft(hackathon.date)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hackathons;
