import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [offset, setOffset] = useState(-80); // Default offset

  // Update offset dynamically based on screen size
  useEffect(() => {
    const updateOffset = () => {
      setOffset(window.innerWidth >= 1024 ? -80 : -50);
    };
    
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const handleNav = () => setNav(!nav);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <section>
      <nav className="backdrop-blur-md bg-transparent z-50 fixed top-0 left-0 w-full m-auto font-[Inter] text-black flex justify-end items-center h-25 lg:h-27 sm:20">

        {/* Desktop Navigation */}
        <ul className="md:flex mr-[30px] text-lg font-semibold gap-2 lg:gap-10 md:gap-5 justify-end cursor-pointer lg:mr-[100px] hidden">
          {navLinks.map(({ id, label }) => (
            <li key={id} className="p-5">
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

        {/* Mobile Navigation */}
        <button
          className="absolute top-5 right-5 md:hidden"
          onClick={handleNav}
          aria-label="Toggle menu"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ${
            nav ? "block" : "hidden"
          } md:hidden`}
        >
          <ul className="flex flex-col items-start space-y-4 py-4 px-6 text-lg font-medium">
            {navLinks.map(({ id, label }) => (
              <li key={id} className="w-full hover:text-blue-600 transition duration-300">
                <ScrollLink
                  to={id}
                  smooth={true}
                  offset={offset}
                  duration={500}
                  onClick={handleNav} // Close menu on click
                  className="cursor-pointer w-full"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        
      </nav>
    </section>

  );
};

export default NavBar;
