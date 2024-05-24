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
    <div id="hobby" className="hobbies flex flex-col items-center justify-center gap-6">
        <div className="hobbies-title relative z-[-2]">
            <h2 className="text-2xl font-semibold px-[30px] py-0">Mes Hobbies</h2>
        </div>    
        <div className="hobbies-carousel  relative flex justify-center items-center z-[-2]">
            <BsArrowLeftCircleFill className="arrow absolute w-8 h-8 text-[white] left-2" onClick={prevSlide}/>
            {slides.map((item, idx) => {
        return (
            <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "shadow-[0px_0px_7px_#666] ml-[1%] w-[90%] h-[100%] object-fill rounded-lg " : "shadow-[0px_0px_7px_#666] w-[90%] h-[100%] object-fill rounded-lg hidden"}
          />

        );
      })}
            <BsArrowRightCircleFill className="arrow absolute w-8 h-8 text-[white] right-2" onClick={nextSlide}/>
            <span className="flex absolute bottom-4">
                {slides.map((_, idx) =>{
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx? "indicator bg-[white] h-2 w-2 shadow-[0px_0px_5px_black] cursor-pointer mx-[0.2rem] my-0 rounded-[100%] border-[none]" : "indicator bg-[white] h-2 w-2 shadow-[0px_0px_5px_black] cursor-pointer mx-[0.2rem] my-0 rounded-[100%] border-[none] indicator-inactive"}></button>
                })}
            </span>
            
        </div>
       
    </div>
  )
}

export default Hobbies