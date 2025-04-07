import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { FaRegLightbulb, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // Import icons
import myPhoto from "../assets/portfolio.jpg";
import { Link as ScrollLink } from "react-scroll";
import Background from "./components/BackgroundContainer";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [offset, setOffset] = useState(-80); // Default offset

  // Update offset dynamically based on screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
  
    const handleChange = (e) => setOffset(e.matches ? -80 : -50);
    
    handleChange(mediaQuery); // Set initially
    mediaQuery.addEventListener('change', handleChange);
  
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleNav = () => setNav(!nav);

  // Close the mobile menu when a link is clicked
  const toggleSidebar = () => setNav(false);

  const navLinks = [
    { id: "home", label: "Home", icon: <AiOutlineHome /> },  // Example icon
    { id: "skills", label: "Skills", icon: <FaRegLightbulb /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <section>
      <nav className="backdrop-blur-md bg-transparent z-50 fixed top-0 left-0 w-full m-auto font-[Inter] text-black flex justify-end items-center h-16 lg:h-27 sm:20 px-15">

        {/* Desktop Navigation */}
        <ul className="md:flex mr-[30px] text-lg font-semibold gap-2 lg:gap-10 md:gap-5 justify-end cursor-pointer hidden">
          {navLinks.map(({ id, label }) => (
            <li key={id} className="p-5 ">
              <ScrollLink
                to={id}
                smooth={true}
                offset={offset}
                duration={500}
                spy={true}
                hashSpy={true}
                activeClass="text-blue-600 font-bold"
                className="cursor-pointer"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <button
          className="absolute top-5 right-5 md:hidden"
          onClick={handleNav}
          aria-label="Toggle menu"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-14 right-0 h-[calc(100vh-60px)] w-75 rounded-full text-black z-50 transform transition-transform duration-300 md:hidden shadow-xl ${nav ? "block" : "hidden"}`}
        >

          <Background />
          <div className="flex flex-col h-full p-6">
            {/* User Info */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="relative w-35 h-35">
                <img
                  src={myPhoto}
                  alt="Kienghok"
                  className="w-35 h-35 rounded-full animate-pulse-2s"
                />
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin"></div> {/* Animation ring */}
              </div>
              <span className="font-bold text-[18px] italic">Kheav Kienghok</span>
            </div>

            

            {/* Sidebar Nav */}
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ id, label, icon }) => (
                <li key={id}>
                  <ScrollLink
                    to={id}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    onClick={toggleSidebar}  // Close the menu when clicked
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
                  >
                    {icon && <span className="text-xl">{icon}</span>}
                    <span>{label}</span>
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Contact Info (for Contact Section) */}
            <div className="mt-6 border-t border-white/20 pt-4 text-sm text-black">
              <p>Get in touch:</p>
              <p>kheavkienghok@gmail.com</p>
              <p>+855 17 646 791</p>
            </div>
          </div>
        </div>

      </nav>
    </section>
  );
};

export default NavBar;
