import React, { useState, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Parallax } from 'react-parallax';
import Popup from "../popup/Popup";
import { ThemeContext } from "../Themes/ThemeContext";

import profile_img from "../../assets/profile_img.webp";
import cv from "../../assets/cv-2024.webp";
import cv_pdf from "../../assets/cv-2024.pdf";
import heroBackground from "../../assets/hero-background.webp"; // Add this import

export const Hero = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { theme } = useContext(ThemeContext);

  const getOverlayStyle = () => {
    switch (theme) {
      case 'light':
        return { backgroundColor: 'rgba(249, 250, 251, 0.8)' }; // bg-gray-50 with opacity
      case 'dark':
        return { backgroundColor: 'rgba(31, 41, 55, 0.8)' }; // bg-gray-800 with opacity
      default:
        return { backgroundColor: 'rgba(255, 237, 213, 0.8)' }; // bg-orange-100 with opacity
    }
  };

  return (
    <Parallax
      blur={0}
      bgImage={heroBackground}
      bgImageAlt="Hero Background"
      strength={775}
    >
      <div style={getOverlayStyle()}>
        <div id="home" className={`py-20 md:py-32 transition-colors duration-300`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <img
                src={profile_img}
                alt="Profile"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                <span className={`bg-clip-text text-transparent
                  ${theme === 'light' ? 'bg-gradient-to-r from-[#0983bc] to-[#4cbf95]' :
                    theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-teal-400' :
                    'bg-gradient-to-r from-orange-400 to-red-400'}`}>
                  Hello, I'm Antoine!
                </span>
              </h2>
              <p className={`text-xl md:text-2xl text-center mb-6
                ${theme === 'light' ? 'text-gray-700' :
                  theme === 'dark' ? 'text-gray-300' :
                  'text-orange-800'}`}>
                Newbie développeur frontend/fullstack sur Paris.
              </p>
              <p className={`text-lg text-center mb-10
                ${theme === 'light' ? 'text-gray-600' :
                  theme === 'dark' ? 'text-gray-400' :
                  'text-orange-700'}`}>
                Ceci est un portfolio, il parait.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AnchorLink
                  href="#contact"
                  offset={50}
                  className={`px-6 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300 text-center
                    ${theme === 'light' ? 'bg-gradient-to-r from-[#0983bc] to-[#4cbf95] text-white' :
                      theme === 'dark' ? 'bg-blue-600 text-white' :
                      'bg-orange-400 text-white'}`}
                >
                  Envoyer une missive
                </AnchorLink>
                <button
                  onClick={() => setButtonPopup(true)}
                  className={`px-6 py-3 rounded-full font-semibold border-2 transition duration-300
                    ${theme === 'light' ? 'bg-white text-[#0983bc] border-[#0983bc] hover:bg-gray-100' :
                      theme === 'dark' ? 'bg-gray-700 text-blue-400 border-blue-400 hover:bg-gray-600' :
                      'bg-orange-50 text-orange-700 border-orange-400 hover:bg-orange-100'}`}
                >
                  Mon CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <a href={cv_pdf} target="_blank" rel="noopener noreferrer" className="block">
          <img src={cv} alt="CV" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
        </a>
      </Popup>
    </Parallax>
  );
};

export default Hero;