import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { FaRegLightbulb, FaProjectDiagram, FaEnvelope, FaTelegram, FaFacebook   } from "react-icons/fa"; 
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { IoPhonePortraitOutline } from "react-icons/io5";
import myPhoto from "../assets/my_picture.png";
import { Link as ScrollLink } from "react-scroll";
import Background from "./components/BackgroundContainer";
import { Link } from 'react-router-dom';



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

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [nav]);

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
          className={`font-[Lato-Thin] fixed top-14 right-0 h-[calc(100vh-60px)] w-75 rounded-full text-black z-50 transform transition-transform duration-300 md:hidden shadow-xl ${nav ? "block" : "hidden"}`}
        >

          <Background />
          <div className="flex flex-col h-full p-4">
            {/* User Info */}
            <div className="flex flex-col items-center gap-3 mb-2">
              {/* Container that hides overflow */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                {/* Profile Photo */}
                <img
                  src={myPhoto}
                  alt="Kienghok"
                  className="w-full h-full object-cover rounded-full scale-115 animate-pulse duration-[1000ms] ease-in-out transform transition-transform"
                  style={{
                    WebkitTransform: "scale(1.25)", // Fallback for iOS
                    willChange: "transform",
                    WebkitAnimation: "pulseAnimation 15000ms infinite ease-in-out", // Fallback for iOS
                    animation: "pulseAnimation 15000ms infinite ease-in-out", // Standard CSS for modern browsers
                  }}
                />

                {/* Animated Ring (positioned absolutely) */}
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin"
                  style={{
                    border: "4px solid",
                    borderColor: "rgba(0,132,255,0.5) transparent rgba(0,132,255,0.5) transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    WebkitAnimation: "spin 1s linear infinite",
                  }}
          
                ></div>

              </div>

              {/* Name */}
              <span className="font-bebas text-[30px] italic">Kheav Kienghok</span>

            </div>
          
            {/* Divider Line */}
            <div className="w-full h-[3px] bg-gray-300 mb-2"
              style={{
                backgroundColor: "#D1D5DB", // Fallback for bg-gray-300
              }}
            ></div>


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
                    className="flex items-center gap-3 px-3 py-[7px] rounded-lg hover:bg-white/10 cursor-pointer"
                  >
                    {icon && <span className="text-2xl">{icon}</span>}
                    <span>{label}</span>
                  </ScrollLink>
                  <div className="w-full h-[1px] bg-gray-300 mt-1"
                    style={{
                      backgroundColor: "#D1D5DB", // Fallback for bg-gray-300
                    }}
                  ></div>
                </li>
                
              ))}
            </ul>

            {/* Contact Info (for Contact Section) */}
            <div className="font-funnel text-[17px] mt-4 border-t border-white/20 pt-3 text-black flex flex-col items-center">
              <p className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ease-in-out"
                style={{
                  backgroundImage: "linear-gradient(to right, #3B82F6, #9333EA)", // Fallback for gradient
                  WebkitBackgroundClip: "text", // Ensures text clipping for gradient
                  color: "transparent", // Fallback for text transparency
                }}
              >
                Get in Touch
              </p>
      
              <div className="w-full max-w-md bg-transparent text-black p-2 rounded-2xl shadow-lg border border-white/20">

                <div className="flex flex-col space-y-3 w-full max-w-xs ml-2">

                  <div className="flex items-center gap-3">
                    <SiGmail size={20} className="text-[#D14836]"  />
                    <Link
                      href="mailto:kheavkienghok@gmail.com"
                      className="hover:underline text-gray-800 hover:text-[#D14836] transition duration-300"
                    >
                      kheavkienghok@gmail.com
                    </Link>
                  </div>

                  <div className="flex items-center gap-3">
                    <IoPhonePortraitOutline size={22} className="text-gray-700" />
                    <Link
                      href="tel:+85517646791"
                      className="hover:underline text-gray-800 hover:text-gray-700 transition duration-300"
                    >
                      +855 17 646 791
                    </Link>
                  </div>
                  
                </div>

              </div>

              <div className="flex justify-center gap-5 text-gray-600 text-3xl relative z-10 pt-4">
                {/* Telegram */}
                <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="#"
                    onClick={() => window.open("https://t.me/anshishui", "_blank", "noopener,noreferrer")}
                    className="transition duration-300 hover:text-[#0088cc]"
                  >
                    <FaTelegram size={25} className="text-[#0088cc]" />
                  </Link>
                </motion.div>

                {/* Facebook */}
                <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="#"
                    onClick={() => window.open("https://www.facebook.com/profile.php?id=100009161414858&mibextid=LQQJ4d", "_blank", "noopener,noreferrer")}
                    className="transition duration-300 hover:text-[#1877F2]"
                  >
                    <FaFacebook size={25} className="text-[#1877F2]" />
                  </Link>
                </motion.div>

                {/* Gmail */}
                <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="#"
                    onClick={() => window.location.href = "mailto:kheavkienghok@gmail.com"}
                    className="transition duration-300 hover:text-red-500"
                  >
                    <SiGmail size={25} className="text-red-600" 
                      style={{
                        color: "#D14836"
                      }}
                    />
                  </Link>
                </motion.div>
              </div>

            </div>

          </div>
        </div>

      </nav>
    </section>
  );
};

export default NavBar;
