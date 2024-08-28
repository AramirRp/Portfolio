import React from 'react';
import footer_logo from '../../assets/logo.svg';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="mb-6 sm:mb-0">
            <img src={footer_logo} alt="Footer Logo" className="w-32 h-auto mb-4" />
            <p className="text-sm text-gray-600 italic">
              crédits photos : {' '}
              <a href='https://www.instagram.com/ianmorlion/' className="text-black-600 hover:underline">Ian Morlion</a>
              {' '}et{' '}
              <a href='https://www.facebook.com/vertigesphotovideo' className="text-black-600 hover:underline">vertiges</a>
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/aramirRp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            >
              <i className="fa fa-github fa-2x"></i>
            </a>
            <a 
              href="https://www.instagram.com/antoinerp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            >
              <i className="fa fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
        
        <hr className="border-gray-300 mb-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            Crédits conception, développement, mise en page, graphisme : Antoine Rogé-Picard
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;