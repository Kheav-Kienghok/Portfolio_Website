import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import myPhoto from "../assets/portfolio.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] lg:grid-cols-[1.5fr_0.9fr] items-center max-w-5xl mx-auto px-6 py-5 md:px-2 md:py-8 gap-10">
      
      {/* Left Content */}
      <div className="w-full text-center md:text-left md:mx-3">
        
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          👋 Hi, I'm{" "}
          <span className="text-5xl md:text-7xl font-extrabold text-blue-600 uppercase block sm:inline sm:text-blue-600 ">
            Kienghok
          </span>
        </motion.h1>

        {/* Subtitle */}
        <h2 className="font-[Nunito] text-2xl lg:mt-4 sm:text-3xl md:text-4xl text-gray-600 uppercase py-2">
          A Cloud Developer
        </h2>

        {/* Description */}
        <blockquote className="font-serif text-gray-500 mt-2 lg:mt-4 italic border-l-4 pl-4 border-blue-500 text-sm sm:text-base">
          As a junior in computer science, I’m deeply passionate about cloud engineering and web development. 
          I thrive on exploring cutting-edge technologies and view challenges as opportunities to grow and learn.
        </blockquote>

        {/* Buttons & Social Links */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <button className="font-funnel bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
            Hire Me
          </button>

          <div className="flex gap-4 text-gray-700">
            <a href="#" className="text-2xl sm:text-3xl hover:text-blue-500 transition">
              <FaGithub />
            </a>
            <a href="#" className="text-2xl sm:text-3xl hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl sm:text-3xl hover:text-blue-500 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image (Moves to Top on Small Screens) */}
      <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[375px] lg:h-[375px] mx-auto rounded-full shadow-lg flex items-center justify-center overflow-hidden border-4 border-blue-400 hover:border-blue-500 transition">
        <img
          src={myPhoto}
          alt="Kienghok"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

    </div>
  );
};

export default Hero;
