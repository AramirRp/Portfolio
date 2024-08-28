import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { slides } from "../../assets/carouselData.js";
import "./hobbies.css"; // Ensure you have this for custom styles

export const Hobbies = () => {
  return (
    <div id="hobby" className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Mes Hobbies
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            interval={5000}
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            emulateTouch
            swipeable
            className="rounded-lg overflow-hidden shadow-xl"
          >
            {slides.map((image) => (
              <div key={image.nm} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] object-cover" // Fixed height for consistency
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-start">
                  <p className="text-white text-lg sm:text-xl font-semibold p-4 sm:p-6">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;