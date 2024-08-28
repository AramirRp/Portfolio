import Services_Data from "../../assets/services_data";
import "./services.css";
import { useState } from "react";

const parastyle = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div id="services" className="services bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="services-title text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Mes Compétences
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Services_Data.map((service, index) => (
            <div
              key={index}
              className="services-format bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-transparent hover:border-black"
            >
              <div className="p-8 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-[#24614b] mb-3 group-hover:text-white">{service.s_no}</h4>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 group-hover:text-white">
                  {service.s_name}
                </h3>
                <p 
                  className={`text-gray-600 text-lg leading-relaxed mb-6 group-hover:text-gray-200`}
                  style={openIndex === index ? null : parastyle}
                >
                  {service.full}
                </p>
              </div>
              <div className="bg-gray-100 p-6">
                <button
                  className="w-full font-semibold text-lg py-2 rounded-lg text-white transition-all duration-300 bg-gradient-to-r from-[#689bb5] to-[#67c7a2] hover:from-[#67c7a2] hover:to-[#689bb5]"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {openIndex === index ? "Read less" : "Read more"}
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