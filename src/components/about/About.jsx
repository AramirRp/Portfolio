
import './about.css'

import profile_img from "../../assets/photo_proflie.jpg"


export const About = () => {
  return (
    <div id="about" className='about flex flex-col items-center gap-y-10 mx-auto my-10'>
      <div className="about-title  relative z-[-2]">
        <h2 className='text-2xl font-semibold px-[30px] py-0'>About Me</h2>
      </div>
      <div className="about-sections">
        <div className="about-left ">
          <img className='profile-img w-[75%] h-[100%]  m-auto z-[-3] 'src={profile_img} alt="" />
        </div>
        <div className="about-right mt-3 ml-3 flex flex-col gap-[60px]">
          <div className="about-text flex flex-col gap-7 text-lg font-medium">
            <p>Après plusieurs années dans le domaine de la communication, j'ai décidé de me reconvertir en tant que développeur full-stack, spécialisé en frontend.</p>
            <p>En parallèle, je suis également un musicien, compositeur, producteur avec un projet encore non annoncé en préparation, prévu pour 2025.</p>
          </div>
          <div className="about-skills flex flex-col gap-[10px]">
            <div className="about-skill"><p>HTML</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>CSS</p><hr style={{width:"40%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Taiwlind CSS</p><hr style={{width:"30%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"45%"}}/></div>
            <div className="about-skill"><p>Studio One</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Photographie</p><hr style={{width:"50%"}}/></div>

          </div>
        </div>
      </div>
      <div className="about-achievements w-full justify-around mb-3">
        <div className="about-achievement flex justify-center items-center gap-5 transition-[0.5s]">
          <h2>1+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement flex justify-center items-center gap-5 transition-[0.5s]">
          <h2 className='text-6xl font-bold bg-clip-text'>10+</h2>
          <p>PROJECTS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About