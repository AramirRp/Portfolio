
import "./myWork.css"

import theme_pattern from "../../assets/theme_pattern.png"
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"



export const MyWork = () => {
  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h2>Mes derniers projets</h2>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index) =>{
                return  <a href={work.w_link} target="_blank"> <img key={index} src={work.w_img} alt="" /><p>{work.w_name}</p></a>
            })}
        </div>
            <div className="mywork-showmore">
               <a href="https://github.com/aramirRp/" target="_blank"> <p>Show More</p>
                <img src={arrow_icon} alt="" />
                </a>
            </div>
    </div>
  )
}

export default MyWork