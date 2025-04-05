import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import myPhoto from "../assets/portfolio.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div className="flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] lg:grid-cols-[1.5fr_0.9fr] items-center max-w-5xl mx-auto px-4 py-25 md:px-2 md:py-45 gap-10">
      
      {/* Left Content */}
      <div className="w-full text-center md:text-left md:mx-3 mt-[-15px] lg:mt-[-5px]">
        
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ WebkitTransform: 'translate3d(0, 0, 0)' }} // added Webkit transform here
        >
          👋 Hi, I'm{" "}
          <span className="text-5xl md:text-7xl font-extrabold text-blue-600 uppercase block sm:inline sm:text-blue-600"
            style={{
              color: '#2563eb', // Ensures fallback for older iOS
            }}
          >
            Kienghok
          </span>
        </motion.h1>

        {/* Subtitle */}
        <h2 className="font-[Nunito] text-2xl lg:mt-4 sm:text-3xl md:text-4xl text-gray-600 uppercase py-2"
          style={{
            color: '#4B5563' // Equivalent to Tailwind's text-gray-600
          }}
        >
          A Cloud Developer
        </h2>

        {/* Description */}
        <blockquote className="font-serif text-gray-500 mt-2 lg:mt-4 italic border-l-4 pl-4 border-blue-500 text-sm sm:text-base"
          style={{
            color: '#6b7280', // Equivalent to text-gray-500
            borderLeft: '4px solid #3b82f6', // Equivalent to border-blue-500
          }}
        >
          As a junior in computer science at <Link to="https://www.aupp.edu.kh" target="_blank"><i>AUPP</i></Link>, I’m deeply passionate about cloud engineering and web development. 
          I thrive on exploring cutting-edge technologies and see challenges as opportunities to grow and learn. I’m also eager to dive 
          into new innovations, with a particular interest in automation.
        </blockquote>

        {/* Buttons & Social Links */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">

          {/* Hire Me Button */}
          <Link
            to="https://t.me/anshishui"
            target="_blank"
            rel="noopener noreferrer"
            className="font-funnel bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg focus:scale-105 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer text-center"
            style={{
              background: "linear-gradient(to right, #3b82f6, #2563eb, #1e40af)",
              backgroundColor: "#2563eb", // Fallback solid color
            }}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://t.me/anshishui", "_blank", "noopener,noreferrer");
            }}
          >
            Hire Me
          </Link>

          <div className="flex gap-4 text-gray-700"
            style={{
              color: '#374151' // Fallback for text-gray-700
            }}
          >

            <Link 
              to="https://www.github.com/Kheav-Kienghok" 
              target="_blank" 
              className="text-2xl sm:text-3xl text-gray-800 hover:text-gray-500 transition"
              style={{ color: '#374151' }} // Fallback for text-gray-800
            >
              <FaGithub size={27} className="text-gray-800" />
            </Link>
            <Link 
              to="https://www.linkedin.com/in/kienghok-kheav-1896b5289" 
              target="_blank" 
              className="text-2xl sm:text-3xl text-blue-700 hover:text-blue-500 transition"
              style={{ color: '#3b82f6' }} // Fallback for text-blue-700
            >
              <FaLinkedin size={27} className="text-blue-700" />
            </Link>
            <Link 
              to="https://www.youtube.com/@KheavKienghok" 
              target="_blank" 
              className="text-2xl sm:text-3xl text-red-600 hover:text-blue-500 transition"
              style={{ color: '#ef4444' }} // Fallback for text-red-600
            >
              <FaYoutube size={27} className="text-red-600" />
            </Link>

          </div>
        </div>
      </div>

      {/* Profile Image (Moves to Top on Small Screens) */}
      <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[375px] lg:h-[375px] mx-auto rounded-full shadow-lg flex items-center justify-center overflow-hidden border-4 border-blue-400 hover:border-blue-500 transition"
        style={{
          borderWidth: '4px',               // Fallback for 'border-4'
          borderColor: '#60a5fa',           // Fallback for 'border-blue-400'
          transition: 'border-color 0.3s ease', // Fallback for 'transition' on hover
        }}
      >
        <img
          src={myPhoto}
          alt="Kienghok"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

    </div>
  );
};

export default Home;
