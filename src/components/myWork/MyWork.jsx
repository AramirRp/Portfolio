import React, { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";
import { useTranslation } from 'react-i18next';
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

export const MyWork = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();



  const getThemeStyles = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-gray-900',
          title: 'text-white',
          buttonBg: 'bg-blue-600 hover:bg-blue-700',
          buttonText: 'text-white',
          hoverBorder: 'border-blue-400',
        };
      case 'custom':
        return {
          bg: 'bg-orange-50',
          title: 'text-orange-900',
          buttonBg: 'bg-orange-500 hover:bg-orange-600',
          buttonText: 'text-white',
          hoverBorder: 'border-orange-400',
        };
      default: // light
        return {
          bg: 'bg-white',
          title: 'text-gray-800',
          buttonBg: 'bg-gray-800 hover:bg-gray-700',
          buttonText: 'text-white',
          hoverBorder: 'border-[#4cbf95]',
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div id="work" className={`${styles.bg} py-16 sm:py-24 transition-colors duration-300`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${styles.title}`}>
          {t('myWork.title')}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {mywork_data.map((work, index) => (
          <div key={index} className="group mywork-container">
            <a 
              href={work.w_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                <img
                  src={work.w_img}
                  alt={t(work.w_name_key)}
                  className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:border-4 group-hover:${styles.hoverBorder} group-hover:rounded-lg`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-base sm:text-lg font-semibold px-4 text-center">{t(work.w_name_key)}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 sm:mt-16 mywork-showmore">
        <a 
          href="https://github.com/aramirRp/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-flex items-center px-6 py-3 ${styles.buttonBg} ${styles.buttonText} font-semibold rounded-full transition-all duration-300 text-sm sm:text-base hover:gap-7`}
        >
          {t('myWork.githubButton')}
          <img src={arrow_icon} alt={t('myWork.arrowAlt')} className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" />
        </a>
      </div>
    </div>
  </div>
);
};

export default MyWork;