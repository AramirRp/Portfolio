
import { useState } from "react";
import Services_Data from "../../assets/services_data"
import Popup from "../popup/Popup";

import "./services.css"
import theme_pattern from "../../assets/theme_pattern.png"
import arrow_icon from "../../assets/arrow_icon.svg"



export const Services = () => {

    const [buttonPopup, setButtonPopup] = useState(false);


  return (
    <div id='services' className="services">
        <div className="services-title">
            <h2>Mes Compétences</h2>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return <div key={index}  className="services-format" > 
                    <h4>{service.s_no}</h4>
                    <h3>{service.s_name}</h3>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />

                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <p className="txt-popup">{service.full}</p>       
                        </Popup>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}


export default Services