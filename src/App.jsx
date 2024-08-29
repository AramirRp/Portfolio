import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import MyWork from './components/myWork/MyWork';
import Contact  from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hobbies from './components/hobbies/hobbies';
import KonamiCode from './components/konamiCode/KonamiCode';

import { ThemeProvider } from '../src/components/Themes/ThemeContext';
import ThemeSwitcher from './components/Themes/ThemeSwitcher';

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider className='w-full h-screen'>
        <KonamiCode />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Hobbies />
        <Contact />
        <Footer />
        <ThemeSwitcher />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App;