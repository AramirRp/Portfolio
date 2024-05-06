
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import MyWork from './components/myWork/MyWork';
import Contact  from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hobbies from './components/hobbies/hobbies';


export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
