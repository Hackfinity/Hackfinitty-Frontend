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
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} style={{ minHeight: carouselHeight }}>
      {slides.map((slide, index) => (
        <div key={index} className="px-4">
          <div className="rounded-lg overflow-hidden h-full flex flex-col items-center justify-center bg-white shadow-lg border border-light-gray">
            <div className="w-full flex items-center justify-center p-4">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover rounded-lg"
                style={{ maxHeight: '320px', width: 'auto' }}
              />
            </div>
            <div className="p-4 w-full flex flex-col justify-center text-center">
              <h2 className="font-bold text-black text-xl md:text-2xl tracking-wide mb-2">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

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
