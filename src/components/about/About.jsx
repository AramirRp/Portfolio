
import './about.css'

import theme_pattern from "../../assets/theme_pattern.png"
import profile_img from "../../assets/photo_proflie.jpg"


export const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h2>About Me</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className='profile-img'src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-text">
            <p>Après plusieurs années dans le domaine de la communication, j'ai décidé de me reconvertir en tant que développeur full-stack, spécialisé en frontend.</p>
            <p>En parallèle, je suis également un musicien, compositeur, producteur avec un projet encore non annoncé en préparation, prévu pour 2025.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>CSS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Taiwlind CSS</p><hr style={{width:"40%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"55%"}}/></div>
            <div className="about-skill"><p>Studio One</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>Photographie</p><hr style={{width:"80%"}}/></div>

          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h2>1+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>10+</h2>
          <p>PROJECTS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About