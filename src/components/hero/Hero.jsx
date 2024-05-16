import AnchorLink from "react-anchor-link-smooth-scroll";

import "./hero.css";
import profile_img from "../../assets/profile_img.jpg";
import cv from "../../assets/cv-2024.jpg";
import cv_pdf from "../../assets/cv-2024.pdf";

export const Hero = () => {
  return (
    <div id="home" className="hero flex items-center flex-col gap-3 md:gap-5">
      <img
        src={profile_img}
        alt=""
        className="profileImg h-1/5 w-[34%] mt-[82px] rounded-[350px] md:mt-[183px] lg:mt-[149px]"
      />
      <h2 className="text-center w-[81%] text-[17px] font-semibold">
        <span className="color-sent bg-clip-text">Hello I'm Antoine ! </span> Newbie développeur frontend/fullstack
        sur Paris.{" "}
      </h2>
      <p className="text-center text-xs leading-[30px]">Ceci est un portfolio, il parait.</p>
      <div className="hero-action flex items-center gap-5 text-xl font-medium mb-10">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Envoyer une missive
          </AnchorLink>
        </div>

        <div className="hero-resume">
          <button> Mon CV (il parait)</button>

          <a href={cv_pdf} target="_blank">
            <img src={cv} alt="CV" className="CV" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
