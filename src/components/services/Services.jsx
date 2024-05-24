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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="services"
      className="services  flex flex-col items-center gap-y-10 mx-auto my-10"
    >
      <div className="services-title  relative z-[-2]">
        <h2 className="text-2xl font-semibold px-[30px] py-0">
          Mes Compétences
        </h2>
      </div>
      <div className="services-container items-center grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mb-[60px]">
        {Services_Data.map((service, index) => {
          return (
            <div
              key={index}
              className="services-format items-center border-black w-[90%] m-auto rounded-lg"
            >
              <h4 className="text-[28px] ml-4 font-semibold">{service.s_no}</h4>
              <h3 className="text-[38px] ml-4 font-extrabold bg-clip-text">
                {service.s_name}
              </h3>
              <p className="text-[#000000d4] ml-2 text-2xl leading-10 min-w-[300px]" style={isOpen ? null : parastyle}>
                {service.full}
              </p>
              <div className=" ml-[60%] mb-6 services-readmore flex gap-2 items-center justify-center  mt-10">
                <button
                  className="font-semibold text-lg"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "read less..." : "read more..."}
                </button>

                {/*   <p className="txt-popup"></p>        */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
