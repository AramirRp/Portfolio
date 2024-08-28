import React, { useState, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Parallax } from 'react-parallax';
import Popup from "../popup/Popup";
import { ThemeContext } from "../Themes/ThemeContext";
import { useTranslation } from 'react-i18next';

import profile_img from "../../assets/profile_img.webp";
import cv from "../../assets/cv-2024.webp";
import cv_pdf from "../../assets/cv-2024.pdf";
import heroBackground from "../../assets/hero-background.webp";

export const Hero = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const getOverlayStyle = () => {
    switch (theme) {
      case 'light':
        return { backgroundColor: 'rgba(249, 250, 251, 0.8)' };
      case 'dark':
        return { backgroundColor: 'rgba(31, 41, 55, 0.8)' };
      default:
        return { backgroundColor: 'rgba(255, 237, 213, 0.8)' };
    }
  };

  return (
    <Parallax
      blur={0}
      bgImage={heroBackground}
      bgImageAlt="Hero Background"
      strength={775}
      className="min-h-screen"
    >
      <div style={getOverlayStyle()} className="min-h-screen flex items-center justify-center">
        <div id="home" className="py-10 md:py-16 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <img
              src={profile_img}
              alt={t('hero.profileAlt')}
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg mb-6 sm:mb-8"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
              <span className={`bg-clip-text text-transparent
                ${theme === 'light' ? 'bg-gradient-to-r from-[#0983bc] to-[#4cbf95]' :
                  theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-teal-400' :
                  'bg-gradient-to-r from-orange-400 to-red-400'}`}>
                {t('hero.greeting')}
              </span>
            </h2>
            <p className={`text-lg sm:text-xl md:text-2xl text-center mb-4 sm:mb-6
              ${theme === 'light' ? 'text-gray-700' :
                theme === 'dark' ? 'text-gray-300' :
                'text-orange-800'}`}>
              {t('hero.title')}
            </p>
            <p className={`text-base sm:text-lg text-center mb-6 sm:mb-10
              ${theme === 'light' ? 'text-gray-600' :
                theme === 'dark' ? 'text-gray-400' :
                'text-orange-700'}`}>
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <AnchorLink
                href="#contact"
                offset={50}
                className={`px-6 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300 text-center w-full sm:w-auto
                  ${theme === 'light' ? 'bg-gradient-to-r from-[#0983bc] to-[#4cbf95] text-white' :
                    theme === 'dark' ? 'bg-blue-600 text-white' :
                    'bg-orange-400 text-white'}`}
              >
                {t('hero.cta')}
              </AnchorLink>
              <button
                onClick={() => setButtonPopup(true)}
                className={`px-6 py-3 rounded-full font-semibold border-2 transition duration-300 w-full sm:w-auto
                  ${theme === 'light' ? 'bg-white text-[#0983bc] border-[#0983bc] hover:bg-gray-100' :
                    theme === 'dark' ? 'bg-gray-700 text-blue-400 border-blue-400 hover:bg-gray-600' :
                    'bg-orange-50 text-orange-700 border-orange-400 hover:bg-orange-100'}`}
              >
                {t('hero.cv')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <a href={cv_pdf} target="_blank" rel="noopener noreferrer" className="block">
          <img src={cv} alt={t('hero.cvAlt')} className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
        </a>
      </Popup>
    </Parallax>
  );
};

export default Hero;