import React, { useState, useEffect } from "react";

const ImageCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex items-center justify-center p-4"
            style={{ minWidth: "100%", minHeight: "300px" }} // Adjusted minHeight for larger cards
          >
            <div className="w-full lg:w-4/5 flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-1/2 flex justify-center items-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-full h-full max-w-xs max-h-80 rounded-l-lg" // Adjusted max size and added rounded corners
                />
              </div>
              <div className="w-1/2 p-8">
                <h2 className="font-bold text-blue-500 text-xl md:text-2xl tracking-wide">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base text-gray-700 mt-4">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
            )
          }
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
