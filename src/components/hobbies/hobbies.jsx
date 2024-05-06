import { useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

import "./hobbies.css"

import theme_pattern from "../../assets/theme_pattern.png"
import {slides} from "../../assets/carouselData.js"



export const Hobbies = () => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () =>{
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    }

    const prevSlide= () =>{
        setSlide(slide === 0 ? slides.length - 1 :  slide-1);
    }

  return (
    <div id="hobby" className="hobbies">
        <div className="hobbies-title">
            <h2>Mes Hobbies</h2>
            <img src={theme_pattern} alt="" />
        </div>    
        <div className="hobbies-carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {slides.map((item, idx) => {
        return (
            <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />

        );
      })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {slides.map((_, idx) =>{
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
            
        </div>
       
    </div>
  )
}

export default Hobbies