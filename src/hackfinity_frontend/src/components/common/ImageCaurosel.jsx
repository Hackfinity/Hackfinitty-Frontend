import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageCarousel({ slides, carouselHeight }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Time interval between transitions in milliseconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        className: "bg-transparent",
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  
  return (
    <Slider {...settings} style={{ minHeight: carouselHeight }}>
      {slides.map((slide, index) => (
        <div key={index} className="px-4 border-none"> {/* Removed border from here */}
          <div className="shadow-lg rounded-lg overflow-hidden h-full flex items-center justify-center">
            <div className="w-full lg:flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-contain max-h-80 rounded-lg bg-transparent"
                style={{ maxHeight: '320px', width: 'auto' }}
              />
            </div>
            <div className="p-4 lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-bold text-blue text-xl md:text-2xl tracking-wide mb-2 text-center">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base text-gray-700 text-center">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

// Define PropTypes for validation
ImageCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  carouselHeight: PropTypes.string.isRequired,
};

export default ImageCarousel;
