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
        <div className=" rounded-lg overflow-hidden h-full flex flex-col items-center justify-center bg-light-q9`1` ` ``  42``  i ` 1`12111211````5R5R5IYTR098765432655T6`642blue">
            <div className="w-full lg:flex items-center justify-center p-4">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-contain rounded-lg"
                style={{ maxHeight: '320px', width: 'auto' }}
              />
            </div>
            <div className="p-4 lg:w-1/2 flex flex-col justify-center text-center">
              <h2 className="font-bold text-blue-900 text-xl md:text-2xl tracking-wide mb-2">
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
