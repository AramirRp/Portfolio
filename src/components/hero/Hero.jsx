import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Popup from "../popup/Popup";


import "./hero.css";
import profile_img from "../../assets/profile_img.jpg";
import cv from "../../assets/cv-2024.jpg"
import cv_pdf from "../../assets/cv-2024.pdf"

export const Hero = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profileImg"/>
      <h2>
        <span>Hello Im Antoine ! </span> Newbie développeur frontend/fullstack sur Paris.{" "}
      </h2>
      <p>Ceci est un portfolio, il parait.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Envoyer une missive
          </AnchorLink>
        </div>
        
        <div className="hero-resume"> 

        <button onClick={() => setButtonPopup(true)}> Mon CV (il parait)</button>

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <a href={cv_pdf} target="_blank"><img src={cv} alt="CV" className="CV" />  </a>          
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Hero;
