import React, { useState, useContext } from "react";
import Services_Data from "../../assets/services_data";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../Themes/ThemeContext";
import './services.css'


const parastyle = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();


  const getThemeStyles = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-gray-900',
          cardBg: 'bg-gray-800',
          title: 'text-white',
          text: 'text-gray-300',
          hoverBorder: 'border-[#24614b]',
          hoverGradient: 'bg-gradient-to-br from-blue-600 to-teal-600',
          buttonGradient: 'from-blue-600 to-teal-600',
          buttonHoverGradient: 'from-teal-600 to-blue-600',
        };
      case 'custom':
        return {
          bg: 'bg-orange-100',
          cardBg: 'bg-orange-50',
          title: 'text-orange-900',
          text: 'text-orange-800',
          hoverBorder: 'border-red-400',
          hoverGradient: 'bg-gradient-to-br from-orange-400 to-red-400',
          buttonGradient: 'from-orange-400 to-red-400',
          buttonHoverGradient: 'from-red-400 to-orange-400',
        };
      default: // light
        return {
          bg: 'bg-gray-100',
          cardBg: 'bg-white',
          title: 'text-gray-800',
          text: 'text-gray-600',
          hoverBorder: 'border-[#24614b]',
          hoverGradient: 'bg-gradient-to-br from-[#689bb5] to-[#67c7a2]',
          buttonGradient: 'from-[#689bb5] to-[#67c7a2]',
          buttonHoverGradient: 'from-[#67c7a2] to-[#689bb5]',
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div id="services" className={`services ${styles.bg} py-20 transition-colors duration-300`}>
    <div className="container mx-auto px-4">
      <div className="services-title text-center mb-16">
        <h2 className={`text-4xl sm:text-5xl font-bold ${styles.title}`}>
          {t('services.title')}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className={`services-format ${styles.cardBg} rounded-xl shadow-md overflow-hidden border-2 border-transparent
                        transition-all duration-300 hover:${styles.hoverBorder} hover:${styles.hoverGradient} 
                        transform hover:scale-105 group`}
          >
            <div className="p-8 transition-colors duration-300">
              <h4 className={`text-lg font-semibold text-[#24614b] mb-3 group-hover:text-white`}>{service.s_no}</h4>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${styles.title} group-hover:bg-white group-hover:bg-clip-text group-hover:text-transparent`}>
                {t(service.s_name_key)}
              </h3>
              <p 
                className={`${styles.text} text-lg leading-relaxed mb-6 group-hover:text-white`}
                style={openIndex === index ? null : parastyle}
              >
                {openIndex === index ? t(service.full_key) : t(service.s_desc_key)}
              </p>
            </div>
            <div className={`${styles.cardBg} p-6`}>
              <button
                className={`w-full font-semibold text-lg py-2 rounded-lg text-white transition-all duration-300 bg-gradient-to-r 
                            ${theme === 'light' 
                              ? 'from-[#689bb5] to-[#67c7a2] hover:from-[#67c7a2] hover:to-[#689bb5]'
                              : `${styles.buttonGradient} hover:${styles.buttonHoverGradient}`}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {openIndex === index ? t('services.readLess') : t('services.readMore')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Services;