import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

import "./navbar.css";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  const Links = [
    { name: "Accueil", link: "/" },
    { name: "A propos", link: "#about" },
    { name: "Compétences", link: "#services" },
    { name: "Portfolio", link: "#work" },
    { name: "Hobbies", link: "#hobby" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md fixed w-full border-gray-200 bg-gray-50'>
    <div className='max-w-screen-xl md:flex-col lg:flex-row lg:flex-nowrap lg:justify-center flex flex-wrap items-center justify-between mx-auto p-4'>
          <img className="logo md:h-8 md:w-[16%] " src={logo} alt="logo" />

      <div
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  cursor-pointer md:hidden "
      >
        <Hamburger toggled={open} toggle={setOpen} />
      </div>

      <ul
        className={`left-0 absolute  pb-4 md:static w-full pl-4 transition-all duration-500 ease-in md:flex md:items-center md:flex-row md:justify-end md:gap-1 lg:gap-3 lg:mt-2 ${
          open ? "top-20 bg-white opacity-95 md:bg-transparent " : "top-[-490px]"
        }`}
      >
        {Links.map((link) => (
          <li key={link.name} className="md:ml-5 md:content-end md:text-lg  text-xl my-7 rounded-lg flex flex-col cursor-pointer">
            <a
              href={link.link}
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              {link.name}
            </a>
          </li>
        ))}
        <button className="md:p-3 md:m-3 nav-connect text-[22px] cursor-pointer px-6 py-4 rounded-[50px]">
          Missive virtuelle
        </button>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
