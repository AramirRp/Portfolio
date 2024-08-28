import React, { useState, useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "../Themes/ThemeContext";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  const Links = [
    { name: "A propos", link: "#about" },
    { name: "Compétences", link: "#services" },
    { name: "Portfolio", link: "#work" },
    { name: "Hobbies", link: "#hobby" },
  ];

  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`shadow-md fixed w-full z-50 transition-colors duration-300
                     ${theme === 'light' ? 'bg-white' : 
                       theme === 'dark' ? 'bg-gray-900' : 
                       'bg-orange-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {Links.map((link) => (
                <AnchorLink
                  key={link.name}
                  href={link.link}
                  offset={50}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300
                              ${theme === 'light' ? 'text-gray-800 hover:text-gray-600' :
                                theme === 'dark' ? 'text-gray-300 hover:text-white' :
                                'text-orange-700 hover:text-orange-900'}`}
                >
                  {link.name}
                </AnchorLink>
              ))}
              <AnchorLink
                href="#contact"
                offset={50}
                className={`px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition duration-300
                            ${theme === 'light' ? 'bg-gradient-to-r from-[#0983bc] to-[#4cbf95] text-white' :
                              theme === 'dark' ? 'bg-blue-600 text-white' :
                              'bg-orange-400 text-white'}`}
              >
                Missive virtuelle
              </AnchorLink>
            </div>
          </div>
          
          <div className="md:hidden">
            <Hamburger toggled={open} toggle={setOpen} color={theme === 'dark' ? '#ffffff' : '#000000'} />
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
                          ${theme === 'light' ? 'text-gray-800 hover:text-gray-600' :
                            theme === 'dark' ? 'text-gray-300 hover:text-white' :
                            'text-orange-700 hover:text-orange-900'}`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </AnchorLink>
          ))}
          <AnchorLink
            href="#contact"
            offset={50}
            className={`block px-3 py-2 rounded-md text-base font-medium hover:shadow-lg transition duration-300
                        ${theme === 'light' ? 'bg-gradient-to-r from-[#0983bc] to-[#4cbf95] text-white' :
                          theme === 'dark' ? 'bg-blue-600 text-white' :
                          'bg-orange-400 text-white'}`}
            onClick={() => setOpen(false)}
          >
            Missive virtuelle
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;