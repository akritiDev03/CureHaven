import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Slider = () => {
  const images = [
    assets.hosPic1,
    assets.hosPic2,
    assets.hosPic3,
    assets.hosPic4
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center space-y-6">
      <div className="relative w-full flex items-center justify-center min-h-[300px]">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-[20px] transition-opacity duration-500 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          />
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Slider;
