import "./myWork.css";

import theme_pattern from "../../assets/theme_pattern.png";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

export const MyWork = () => {
  return (
    <div
      id="work"
      className="mywork flex flex-col items-center justify-center gap-10 "
    >
      <div className="mywork-title  relative z-[-2]">
        <h2 className="text-2xl font-semibold px-[30px] py-0">
          Mes derniers projets
        </h2>
        
      </div>
      <div className="mywork-container grid border-black-100 gap-12">
        {mywork_data.map((work, index) => {
          return (
            <a href={work.w_link} target="_blank">
              {" "}
              <img
                key={index}
                src={work.w_img}
                alt=""
                className="box-border ml-[5%]  w-[90%] h-[100%] transition-[0.3s] cursor-pointer object-cover"
              />
              <p className="ml-[5%] italic font-semibold">{work.w_name}</p>
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore flex gap-[15px] text-[22px] font-medium transition-[0.6s] cursor-pointer mb-20 px-[5%] py-[3%] rounded-[50px] border-2 border-solid border-[black]">
        <a href="https://github.com/aramirRp/" target="_blank" className="no-underline flex ml-[30%] text-xl font-medium p-0 border-[none]">
          {" "}
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MyWork;
