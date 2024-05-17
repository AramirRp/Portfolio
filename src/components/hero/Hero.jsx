import AnchorLink from "react-anchor-link-smooth-scroll";
import Popup from "../popup/Popup";
import { useState } from "react";

import "./hero.css";
import profile_img from "../../assets/profile_img.jpg";
import cv from "../../assets/cv-2024.jpg";
import cv_pdf from "../../assets/cv-2024.pdf";

export const Hero = () => {

const [buttonPopup, setButtonPopup] = useState(false);


  return (
    <div id="home" className="hero flex items-center flex-col gap-3 md:gap-5">
      <img
        src={profile_img}
        alt=""
        className="profileImg h-1/5 w-[34%] mt-[82px] rounded-[350px] md:mt-[183px] lg:mt-[149px] lg:w-[24%]"
      />
      <h2 className="text-center w-[81%] text-[17px] font-semibold">
        <span className="color-sent bg-clip-text">Hello I'm Antoine ! </span> Newbie développeur frontend/fullstack
        sur Paris.{" "}
      </h2>
      <p className="text-center text-xs leading-[30px]">Ceci est un portfolio, il parait.</p>
      <div className="hero-action flex items-center gap-5 text-xl font-xs mb-10">
        <div className="hero-connect cursor-pointer px-4 py-2 rounded-[50px]">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Envoyer une missive
          </AnchorLink>
        </div>

        <div className="hero-resume cursor-pointer px-4 py-2  rounded-[50px] border-2 border-solid border-black">
          <button onClick={() => setButtonPopup(true)}> Mon CV (il parait)</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className="w-[30%] items-center text-center">
              <a href={cv_pdf} target="_blank">
                <img src={cv} alt="CV" className="CV w-[100%] h-[100%]" />{" "}
              </a>
          </Popup>
       
        </div>
      </div>
    </div>
  );
};

export default Hero;
