
import Services_Data from "../../assets/services_data"

import "./services.css"
import theme_pattern from "../../assets/theme_pattern.png"
import arrow_icon from "../../assets/arrow_icon.svg"



export const Services = () => {



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

                                <p className="txt-popup">{service.full}</p>       
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}


export default Services