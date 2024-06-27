import React from 'react';
import PropTypes from 'prop-types';

const FeatureBanner = ({ icon, heading, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-full md:w-1/4 transition-transform transform hover:scale-105">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">
        {heading}
      </h3>
      <p className="text-gray-700">
        {text}
      </p>
    </div>
  );
};

FeatureBanner.propTypes = {
  icon: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureBanner;
