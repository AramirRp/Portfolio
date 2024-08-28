import React, { useContext } from 'react';
import { ThemeContext } from "../Themes/ThemeContext";
import profile_img from "../../assets/photo_proflie.jpg";

export const About = () => {
  const { theme } = useContext(ThemeContext);

  const getThemeStyles = () => {
    switch(theme) {
      case 'dark':
        return {
          bg: 'bg-gray-800',
          text: 'text-gray-200',
          title: 'from-blue-400 to-teal-400',
          skillBar: 'linear-gradient(264deg, #3B82F6 -5.09%, #14B8A6 106.28%)',
          divider: 'bg-gray-600'
        };
      case 'custom':
        return {
          bg: 'bg-orange-50',
          text: 'text-orange-800',
          title: 'from-orange-400 to-red-400',
          skillBar: 'linear-gradient(264deg, #FB923C -5.09%, #EF4444 106.28%)',
          divider: 'bg-orange-300'
        };
      default: // light
        return {
          bg: 'bg-white',
          text: 'text-gray-700',
          title: 'from-[#0983bc] to-[#4cbf95]',
          skillBar: 'linear-gradient(264deg, #0983bc -5.09%, #4cbf95 106.28%)',
          divider: 'bg-gray-300'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div id="about" className={`${styles.bg} ${styles.text} transition-colors duration-300 w-full`}>
      <div className="container mx-auto px-4 py-16">
        <div className="about-title text-center mb-10">
          <h2 className={`text-2xl sm:text-3xl font-semibold relative inline-block px-[30px] bg-gradient-to-r ${styles.title} bg-clip-text text-transparent`}>About Me</h2>
        </div>
        <div className="about-sections flex flex-col lg:flex-row items-start gap-10">
          <div className="about-left w-full lg:w-1/3">
            <img className='profile-img w-[75%] max-w-xs mx-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105' src={profile_img} alt="Profile" />
          </div>
          <div className="about-right w-full lg:w-2/3 mt-3 lg:mt-0">
            <div className="about-text flex flex-col gap-7 text-lg font-medium">
              <p>Après plusieurs années dans le domaine de la communication, j'ai décidé de me reconvertir en tant que développeur full-stack, spécialisé en frontend.</p>
              <p>En parallèle, je suis également un musicien, compositeur, producteur avec un projet encore non annoncé en préparation, prévu pour 2025.</p>
            </div>
            <div className="about-skills flex flex-col gap-[15px] mt-10">
              {['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'React JS', 'Laravel', 'Studio One', 'Photographie'].map((skill, index) => (
                <div key={index} className="about-skill flex gap-[25px] items-center transition-transform duration-300 hover:scale-105">
                  <p className="min-w-[150px] text-2xl font-medium">{skill}</p>
                  <div className="flex-grow h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-300 ease-in-out"
                      style={{
                        width: `${[50, 40, 50, 45, 45, 35, 60, 50][index]}%`,
                        background: styles.skillBar
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-achievements w-full flex flex-col sm:flex-row justify-around mt-16 mb-3">
          <div className="about-achievement flex justify-center items-center gap-5 transition-transform duration-500 hover:scale-110">
            <h2 className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${styles.title} bg-clip-text text-transparent`}>1+</h2>
            <p className="text-xl sm:text-2xl font-medium uppercase">Years of Experience</p>
          </div>
          <hr className={`w-full sm:w-px sm:h-20 ${styles.divider} my-5 sm:my-0`} />
          <div className="about-achievement flex justify-center items-center gap-5 transition-transform duration-500 hover:scale-110">
            <h2 className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${styles.title} bg-clip-text text-transparent`}>10+</h2>
            <p className="text-xl sm:text-2xl font-medium uppercase">Projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;