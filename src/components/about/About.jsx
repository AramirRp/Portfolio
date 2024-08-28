import './about.css'
import profile_img from "../../assets/photo_proflie.jpg"

export const About = () => {
  return (
    <div id="about" className='about container mx-auto px-4 py-10'>
      <div className="about-title text-center mb-10">
        <h2 className='text-2xl sm:text-3xl font-semibold relative inline-block px-[30px]'>About Me</h2>
      </div>
      <div className="about-sections flex flex-col lg:flex-row items-start gap-10">
        <div className="about-left w-full lg:w-1/3">
          <img className='profile-img w-[75%] max-w-xs mx-auto rounded-lg shadow-md' src={profile_img} alt="" />
        </div>
        <div className="about-right w-full lg:w-2/3 mt-3 lg:mt-0">
          <div className="about-text flex flex-col gap-7 text-lg font-medium">
            <p>Après plusieurs années dans le domaine de la communication, j'ai décidé de me reconvertir en tant que développeur full-stack, spécialisé en frontend.</p>
            <p>En parallèle, je suis également un musicien, compositeur, producteur avec un projet encore non annoncé en préparation, prévu pour 2025.</p>
          </div>
          <div className="about-skills flex flex-col gap-[10px] mt-10">
            {['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'React JS', 'Laravel', 'Studio One', 'Photographie'].map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill}</p>
                <hr style={{width: `${[50, 40, 50, 45, 45, 35, 60, 50][index]}%`}} className="bg-gray-300 h-1 rounded"/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievements w-full flex flex-col sm:flex-row justify-around mt-16 mb-3">
        <div className="about-achievement flex justify-center items-center gap-5 transition-[0.5s] mb-5 sm:mb-0">
          <h2 className='text-4xl sm:text-5xl font-bold'>1+</h2>
          <p className="text-sm sm:text-base uppercase">Years of Experience</p>
        </div>
        <hr className="w-full sm:w-px sm:h-20 bg-gray-300 my-5 sm:my-0" />
        <div className="about-achievement flex justify-center items-center gap-5 transition-[0.5s]">
          <h2 className='text-4xl sm:text-5xl font-bold bg-clip-text'>10+</h2>
          <p className="text-sm sm:text-base uppercase">Projects</p>
        </div>
      </div>
    </div>
  )
}

export default About