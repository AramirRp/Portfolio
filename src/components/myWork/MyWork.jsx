import React from "react";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

export const MyWork = () => {
  return (
    <div id="work" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Mes derniers projets
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mywork_data.map((work, index) => (
            <div key={index} className="group">
              <a 
                href={work.w_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                  <img
                    src={work.w_img}
                    alt={work.w_name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-base sm:text-lg font-semibold px-4 text-center">{work.w_name}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <a 
            href="https://github.com/aramirRp/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base"
          >
            Mon Github
            <img src={arrow_icon} alt="Arrow" className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyWork;