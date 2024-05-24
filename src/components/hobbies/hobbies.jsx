import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



import "./hobbies.css";

import { slides } from "../../assets/carouselData.js";

export const Hobbies = () => {

  return (
    <div
      id="hobby"
      className="hobbies flex flex-col items-center justify-center gap-6"
    >
      <div className="hobbies-title relative z-[-2]">
        <h2 className="text-2xl font-semibold px-[30px] py-0">Mes Hobbies</h2>
      </div>
      <Carousel
        className="crsl"
        autoPlay
        infiniteLoop
        centerMode
        interval={5000}
      >
        {slides.map((image) => (
          <img
            src={image.src}
            alt={image.alt}
            key={image.nm}
            className="shadow-[0px_0px_7px_#666] ml-[1%] w-[90%] h-[100%] object-cover rounded-lg"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Hobbies;
