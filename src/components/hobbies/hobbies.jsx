import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from 'react-i18next';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { slides } from "../../assets/carouselData.js";
import { ThemeContext } from "../Themes/ThemeContext";
import "./hobbies.css"; // Ensure you have this for custom styles

export const Hobbies = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();


  const getThemeStyles = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-gray-900',
          title: 'text-white',
          carouselBg: 'bg-gray-800',
          textOverlay: 'bg-black bg-opacity-50',
        };
      case 'custom':
        return {
          bg: 'bg-orange-100',
          title: 'text-orange-900',
          carouselBg: 'bg-orange-200',
          textOverlay: 'bg-orange-900 bg-opacity-50',
        };
      default: // light
        return {
          bg: 'bg-gray-100',
          title: 'text-gray-800',
          carouselBg: 'bg-white',
          textOverlay: 'bg-black bg-opacity-30',
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div id="hobby" className={`${styles.bg} py-16 sm:py-24 transition-colors duration-300`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${styles.title}`}>
          {t('hobbies.title')}
        </h2>
      </div>
      <div className={`max-w-4xl mx-auto ${styles.carouselBg} rounded-lg overflow-hidden shadow-xl`}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          emulateTouch
          swipeable
          className="rounded-lg overflow-hidden"
        >
          {slides.map((image) => (
            <div key={image.nm} className="relative">
              <img
                src={image.src}
                alt={t(image.alt_key)}
                className="w-full h-[400px] object-cover"
              />
              <div className={`absolute inset-0 ${styles.textOverlay} flex items-end justify-start`}>
                <p className="text-white text-lg sm:text-xl font-semibold p-4 sm:p-6">
                  {t(image.alt_key)}
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