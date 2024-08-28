import React, { useContext } from 'react';
import { ThemeContext } from "../Themes/ThemeContext";
import footer_logo from '../../assets/logo.svg';
import logoWhite from "../../assets/logo-white.svg"
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const getLogo = (theme) => {
    switch(theme) {
      case 'dark':
        return logoWhite;
      case 'light':
      case 'custom':
      default:
        return footer_logo;
    }
  };


  const getThemeStyles = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-gray-900',
          text: 'text-gray-300',
          link: 'text-gray-400 hover:text-white',
          icon: 'text-gray-400 hover:text-white',
          border: 'border-gray-700',
        };
      case 'custom':
        return {
          bg: 'bg-orange-100',
          text: 'text-orange-800',
          link: 'text-orange-700 hover:text-orange-900',
          icon: 'text-orange-700 hover:text-orange-900',
          border: 'border-orange-300',
        };
      default: // light
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          link: 'text-black-600 hover:text-black-800',
          icon: 'text-gray-600 hover:text-gray-800',
          border: 'border-gray-300',
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <footer className={`${styles.bg} py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="mb-6 sm:mb-0">
            <img src={getLogo(theme)} alt="Footer Logo" className="w-32 h-auto mb-4" />
            <p className={`text-sm ${styles.text} italic`}>
              crédits photos : {' '}
              <a href='https://www.instagram.com/ianmorlion/' className={`${styles.link} hover:underline`}>Ian Morlion</a>
              {' '}et{' '}
              <a href='https://www.facebook.com/vertigesphotovideo' className={`${styles.link} hover:underline`}>vertiges</a>
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/aramirRp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.icon} transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1`}
            >
              <i className="fa fa-github fa-2x"></i>
            </a>
            <a 
              href="https://www.instagram.com/antoinerp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.icon} transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1`}
            >
              <i className="fa fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
        
        <hr className={`${styles.border} mb-8`} />
        
        <div className={`flex flex-col sm:flex-row justify-between items-center text-sm ${styles.text}`}>
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            Crédits conception, développement, mise en page, graphisme : Antoine Rogé-Picard
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;