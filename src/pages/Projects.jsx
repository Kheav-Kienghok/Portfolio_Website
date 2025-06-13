import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaUniversity, FaCamera, FaCode, FaLaptopCode, FaUserLock, FaCalendarAlt, FaGlobe } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: (
      <>
        Bank System <br />
        Application
      </>
    ),
    description: 'A banking application that helps manage accounts, transactions, and security features like encryption. I built this using Python and SQLite, ensuring it is secure and reliable for managing sensitive data.',
    link: 'https://github.com/Kheav-Kienghok/Bank-System-Application',
    icon: <FaUniversity className="text-5xl text-blue-500" style={{ color: '#3b82f6' }} />, // Fallback color blue-500
  },
  {
    id: 2,
    title: (
      <>
        Face Recognition  <br />
        Attendance
      </>
    ),
    description: 'An automated attendance system using face recognition to track attendance accurately. This project uses AI and computer vision to simplify attendance management, ensuring it is fast and secure.',
    link: 'https://github.com/Kheav-Kienghok/Face_Recognition_Attendant',
    icon: <FaCamera className="text-5xl text-green-500" style={{ color: '#10b981' }} />, // Fallback color green-500
  },
  {
    id: 3,
    title: 'Course Analyzer',
    description: 'A tool for schools to optimize student course enrollment by analyzing records and recommending the best courses based on student needs. It helps prevent class overbooking and improves resource allocation and time management.',
    link: 'https://github.com/Kheav-Kienghok/Course_Analyzer',
    icon: <FaCode className="text-5xl text-yellow-500" style={{ color: '#f59e0b' }} />, // Fallback color yellow-500
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal website showcasing my skills, projects, and experience as a developer. Built with React and Tailwind CSS, it highlights my work in a clean and interactive layout. The website is fully responsive and serves as a digital portfolio to present my projects to potential clients or employers.',
    link: 'https://github.com/Kheav-Kienghok/Portfolio_Website',
    icon: <FaLaptopCode className="text-5xl text-purple-500" style={{ color: '#8b5cf6' }} />, // Fallback color purple-500
  },
  {
    id: 5,
    title: 'AuthenticatePage',
    description: 'A secure authentication application with login and registration features. Built with React and FastAPI, it focuses on form validation and password hashing. The app is containerized with Docker for easy deployment, providing a secure and scalable solution for web applications.',
    link: 'https://github.com/Kheav-Kienghok/AuthenticatePage',
    icon: <FaUserLock className="text-5xl text-blue-500" style={{ color: '#3b82f6' }} />, // Fallback color blue-500
  },
  {
    id: 6,
    title: (
      <>
        Eventhub <br />
        Microservices
      </>
    ),
    description: 'A microservices-based event management platform built with Node.js, Express, and MongoDB. Supports event creation, booking, and admin features. Dockerized for easy deployment with modular, RESTful services.',
    link: 'https://github.com/Kheav-Kienghok/Eventhub_microservices',
    icon: <FaCalendarAlt className="text-5xl text-purple-500" style={{ color: '#8b5cf6' }} />, // Fallback color purple-500
  },
  {
    id: 7,
    title: (
      <>
        Khmer-English <br />
        News Scraper
      </>
    ),
    description: 'Volunteer-built bilingual scraper for Cambodia’s Ministry of Commerce site. Uses aiohttp, BeautifulSoup, and sentence-transformers to align Khmer-English news. Async, efficient, and supports CSV/DB storage.',
    link: 'https://github.com/Kheav-Kienghok/MoC-scraper.git',
    icon: <FaGlobe className="text-5xl text-blue-500" style={{ color: '#3b82f6' }} />,
  }
];


const Projects = () => {


  // State to manage the number of visible projects
  const [visibleCount, setVisibleCount] = useState(6); // Default for desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // Tailwind 'md' breakpoint
      setIsMobile(mobile);
      setVisibleCount(mobile ? 3 : 6); // Set based on screen size
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + (isMobile ? 3 : 3));
  };

  const isAllShown = visibleCount >= projects.length;

  return (

    <div className="font-[Lato-Thin] py-10 mb-20">
      <div className="container mx-auto px-10 lg:px-40">

        <h2 className="font-funnel text-[31px] lg:text-4xl font-bold text-center text-blue-600 mb-6"
          style={{
            color: '#2563EB', // Equivalent to Tailwind's text-blue-600
          }}
        >
          Project Showcase
        </h2>

        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-10"
          style={{
            color: '#616161', // Equivalent to Tailwind's text-gray-700
          }}
        >
          A collection of projects where I turn ideas into reality. From AI to web development, each one reflects my passion for building efficient and impactful solutions.
        </p>


        <div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >

          {projects
            .slice()
            .reverse()
            .slice(0, visibleCount)
            .map((project) => (
              <div
                key={project.id}
                className=" project-border-animated relative bg-white bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl p-6 text-center flex flex-col items-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',  // Fallback for bg-white + bg-opacity-30
                  backdropFilter: 'blur(10px)',  // Fallback for backdrop-blur-lg
                  WebkitBackdropFilter: 'blur(10px)',  // Safari fallback
                  border: '1px solid rgba(255, 255, 255, 0.2)',  // Fallback for border-white/20
                }}
              >

                <div className="mb-4 z-10">{project.icon}</div>

                <h3 className="text-2xl font-semibold text-gray-800 z-10"
                  style={{
                    color: '#1F2937', // Equivalent to Tailwind's text-gray-800
                  }}
                >
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3 z-10"
                  style={{
                    color: '#4B5563', // Equivalent to Tailwind's text-gray-600
                  }}
                >
                  {project.description}
                </p>

                <div className="mt-1 flex-grow"></div> {/* Empty space to push the button to the bottom */}

                <Link
                  to={project.link}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/30 z-10"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  <FaGithub className="text-2xl text-gray-800" style={{ color: '#1f2937' }} /> View on GitHub
                </Link>


              </div>

            ))}


        </div>

        {!isAllShown && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="text-white font-semibold px-6 py-2 rounded-lg shadow bg-blue-600 hover:bg-blue-700 transition-colors"
              style={{
                backgroundColor: '#2563EB', // Fallback for bg-blue-600
                color: 'white', // Fallback for text-white
                padding: '0.5rem 1.5rem', // Fallback for px-6 py-2
                borderRadius: '0.5rem', // Fallback for rounded-lg
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', // Fallback for shadow
                fontWeight: '600', // Fallback for font-semibold
                transition: 'all 0.3s ease', // Fallback for transition-colors
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1D4ED8'; // Fallback for hover:bg-blue-700
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#2563EB'; // Reset to original color
              }}
            >
              Load More
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default Projects;