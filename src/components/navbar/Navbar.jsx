import React, { useState, useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "../Themes/ThemeContext";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import logoWhite from "../../assets/logo-white.svg";


import frFlag from "../../assets/fr-flag.svg";
import enFlag from "../../assets/en-flag.svg";


export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const Links = [
    { name: t("nav.about"), link: "#about" },
    { name: t("nav.skills"), link: "#services" },
    { name: t("nav.portfolio"), link: "#work" },
    { name: t("nav.hobbies"), link: "#hobby" },
  ];

  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const getLogo = (theme) => {
    switch (theme) {
      case "dark":
        return logoWhite;
      case "light":
      case "custom":
      default:
        return logo;
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const LanguageFlag = ({ language, onClick }) => (
    <button 
      onClick={() => onClick(language)} 
      className="w-8 h-6 mx-1 transition-transform duration-300 hover:scale-110"
    >
      <img 
        src={language === 'fr' ? frFlag : enFlag} 
        alt={language === 'fr' ? 'French' : 'English'} 
        className="w-full h-full object-cover rounded-sm"
      />
    </button>
  );

  return (
    <nav
      className={`shadow-md fixed w-full z-50 transition-colors duration-300
      ${
        theme === "light"
          ? "bg-white"
          : theme === "dark"
          ? "bg-gray-900"
          : "bg-orange-50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={getLogo(theme)} alt="Logo" />
          </div>

          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {Links.map((link) => (
                <AnchorLink
                  key={link.name}
                  href={link.link}
                  offset={50}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300
               ${
                 theme === "light"
                   ? "text-gray-800 hover:text-gray-600"
                   : theme === "dark"
                   ? "text-gray-300 hover:text-white"
                   : "text-orange-700 hover:text-orange-900"
               }`}
                >
                  {link.name}
                </AnchorLink>
              ))}
              <AnchorLink
                href="#contact"
                offset={50}
                className={`px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition duration-300
             ${
               theme === "light"
                 ? "bg-gradient-to-r from-[#0983bc] to-[#4cbf95] text-white"
                 : theme === "dark"
                 ? "bg-blue-600 text-white"
                 : "bg-orange-400 text-white"
             }`}
              >
                {t("nav.contact")}
              </AnchorLink>
            </div>
            <div className="ml-4 flex items-center">
              <LanguageFlag language="fr" onClick={changeLanguage} />
              <LanguageFlag language="en" onClick={changeLanguage} />
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <div className="flex items-center mr-4">
              <LanguageFlag language="fr" onClick={changeLanguage} />
              <LanguageFlag language="en" onClick={changeLanguage} />
            </div>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              color={theme === "dark" ? "#ffffff" : "#000000"}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Links.map((link) => (
            <AnchorLink
              key={link.name}
              href={link.link}
              offset={50}
              className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300
           ${
             theme === "light"
               ? "text-gray-800 hover:text-gray-600"
               : theme === "dark"
               ? "text-gray-300 hover:text-white"
               : "text-orange-700 hover:text-orange-900"
           }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </AnchorLink>
          ))}
          <AnchorLink
            href="#contact"
            offset={50}
            className={`block px-3 py-2 rounded-md text-base font-medium hover:shadow-lg transition duration-300
         ${
           theme === "light"
             ? "bg-gradient-to-r from-[#0983bc] to-[#4cbf95] text-white"
             : theme === "dark"
             ? "bg-blue-600 text-white"
             : "bg-orange-400 text-white"
         }`}
            onClick={() => setOpen(false)}
          >
            {t("nav.contact")}
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
