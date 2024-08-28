import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Popup from "../popup/Popup";

import profile_img from "../../assets/profile_img.jpg";
import cv from "../../assets/cv-2024.jpg";
import cv_pdf from "../../assets/cv-2024.pdf";

export const Hero = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div id="home" className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <img
            src={profile_img}
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg mb-8"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#0983bc] to-[#4cbf95] bg-clip-text text-transparent">
              Hello, I'm Antoine!
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 text-center mb-6">
            Newbie développeur frontend/fullstack sur Paris.
          </p>
          <p className="text-lg text-gray-600 text-center mb-10">
            Ceci est un portfolio, il parait.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <AnchorLink
              href="#contact"
              offset={50}
              className="bg-gradient-to-r from-[#0983bc] to-[#4cbf95] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300 text-center"
            >
              Envoyer une missive
            </AnchorLink>
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-white text-[#0983bc] px-6 py-3 rounded-full font-semibold border-2 border-[#0983bc] hover:bg-gray-100 transition duration-300"
            >
              Mon CV
            </button>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <a href={cv_pdf} target="_blank" rel="noopener noreferrer" className="block">
          <img src={cv} alt="CV" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
        </a>
      </Popup>
    </div>
  );
};

export default Hero;