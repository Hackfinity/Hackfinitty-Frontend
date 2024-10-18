import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const HackathonCard = ({ hackathon, type }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (type === 'ongoing') {
      const calculateTimeLeft = () => {
        const eventDate = new Date(hackathon.date);
        const difference = eventDate - new Date();
        let timeLeft = '';

        if (difference > 0) {
          timeLeft = `${Math.floor(difference / (1000 * 60 * 60 * 24))}d ${Math.floor((difference / (1000 * 60 * 60)) % 24)}h ${Math.floor((difference / 1000 / 60) % 60)}m ${Math.floor((difference / 1000) % 60)}s`;
        }

        setTimeLeft(timeLeft);
      };

      const timer = setInterval(calculateTimeLeft, 1000);

      return () => clearInterval(timer);
    }
  }, [hackathon.date, type]);

  return (
    <div className="flex flex-col md:flex-row border border-light-gray rounded-lg shadow-lg bg-white mb-16 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-8">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0">
        <img
          src={hackathon.image}
          alt={hackathon.name}
          className="w-full h-auto object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg shadow-lg"
        />
      </div>
      {/* Content Section */}
      <div className="flex-grow w-full md:w-2/3 p-6">
        <h2 className="font-bold text-3xl mb-4 text-gray-900">{hackathon.name} 🎉</h2>
        <p className="text-gray-700 mb-3"><span className="font-bold">Date:</span> {hackathon.date}</p>
        {hackathon.location && <p className="text-gray-700 mb-3"><span className="font-bold">Location:</span> {hackathon.location}</p>}
        {hackathon.type && (
          <p className="text-gray-700 mb-3">
            <span className="font-bold">Type:</span> {hackathon.type === 'online' ? 'Online' : hackathon.type === 'physical' ? 'Physical' : 'Both'}
          </p>
        )}
        {hackathon.description && (
          <p className="text-gray-700 mb-5">
            <span className="font-bold">Description:</span> {hackathon.description}
          </p>
        )}
        {hackathon.bounties && <p className="text-gray-700 mb-5"><span className="font-bold">Bounties:</span> {hackathon.bounties}</p>}
        
        {/* Winners Sections */}
        {type === 'past' && (
          <div className="w-full">
            <h3 className="font-semibold text-2xl mb-4 text-gray-900">🏆 Grand Winners:</h3>
            <div className="flex flex-wrap mb-6">
              {hackathon.grandWinners.map((winner) => (
                <div key={winner.id} className="flex items-center mb-6 w-full md:w-1/2 lg:w-1/3 p-4">
                  <span className="font-bold text-lg">{winner.name}</span>: {winner.project} - {winner.details}
                  {winner.projectLink && (
                    <a
                      href={winner.projectLink}
                      className="ml-2 text-blue-500 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                  {' 🥇'}
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-2xl mb-4 text-gray-900">🥈 1st Runners-Up:</h3>
            <div className="flex flex-wrap mb-6">
              {hackathon.firstRunnersUp.map((winner) => (
                <div key={winner.id} className="flex items-center mb-6 w-full md:w-1/2 lg:w-1/3 p-4">
                  <span className="font-bold text-lg">{winner.name}</span>: {winner.project} - {winner.details}
                  {winner.projectLink && (
                    <a
                      href={winner.projectLink}
                      className="ml-2 text-blue-500 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                  {' 🥈'}
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-2xl mb-4 text-gray-900">🥉 2nd Runners-Up:</h3>
            <div className="flex flex-wrap mb-6">
              {hackathon.secondRunnersUp.map((winner) => (
                <div key={winner.id} className="flex items-center mb-6 w-full md:w-1/2 lg:w-1/3 p-4">
                  <span className="font-bold text-lg">{winner.name}</span>: {winner.project} - {winner.details}
                  {winner.projectLink && (
                    <a
                      href={winner.projectLink}
                      className="ml-2 text-blue-500 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                  {' 🥉'}
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-2xl mb-4 text-gray-900">🏅 Additional Winners:</h3>
            <div className="flex flex-wrap">
              {hackathon.additionalWinners.map((winner) => (
                <div key={winner.id} className="flex items-center mb-6 w-full md:w-1/2 lg:w-1/3 p-4">
                  <span className="font-bold text-lg">{winner.name}</span>: {winner.project} - {winner.details}
                  {winner.category && <span className="ml-2 text-gray-600">({winner.category})</span>}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Ongoing and Incoming Sections */}
        {type === 'ongoing' && (
          <div className="mt-6">
            <button
              onClick={() => window.location.href = '/login'}
              className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 mt-4"
            >
              Join
            </button>
            <div className="text-red-600 font-semibold mt-4">
              Time Left: {timeLeft}
            </div>
          </div>
        )}
        
        {type === 'incoming' && (
          <div className="text-center text-yellow-600 font-semibold mt-6">
            Coming Soon
          </div>
        )}
        
        {hackathon.registrationLink && (
          <a
            href={hackathon.registrationLink}
            className="block text-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 mt-6"
          >
            Register
          </a>
        )}
      </div>
    </div>
  );
};

HackathonCard.propTypes = {
  hackathon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string,
    type: PropTypes.oneOf(['online', 'physical', 'both']),
    description: PropTypes.string,
    bounties: PropTypes.string,
    grandWinners: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        project: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        projectLink: PropTypes.string,
      })
    ),
    firstRunnersUp: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        project: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        projectLink: PropTypes.string,
      })
    ),
    secondRunnersUp: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        project: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        projectLink: PropTypes.string,
      })
    ),
    additionalWinners: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        project: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        category: PropTypes.string,
      })
    ),
    registrationLink: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['past', 'incoming', 'ongoing']).isRequired,
};

export default HackathonCard;
