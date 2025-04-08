import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaUniversity, FaCamera, FaCode, FaLaptopCode } from 'react-icons/fa';

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
    description: 'My personal website that showcases my skills, projects, and experience as a developer. I built this using modern web tools, creating a clean and interactive layout to highlight my work.',
    link: 'https://github.com/Kheav-Kienghok/Portfolio_Website',
    icon: <FaLaptopCode className="text-5xl text-purple-500" style={{ color: '#8b5cf6' }} />, // Fallback color purple-500
  },
];


const Projects = () => {
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


        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative bg-white bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl p-6 text-center flex flex-col items-center"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',  // Fallback for bg-white + bg-opacity-30
                backdropFilter: 'blur(10px)',  // Fallback for backdrop-blur-lg
                WebkitBackdropFilter: 'blur(10px)',  // Safari fallback
                border: '1px solid rgba(255, 255, 255, 0.2)',  // Fallback for border-white/20
              }}            
            >

              <div className="project-border-animated"></div>

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
      </div>
      
      <style>
        {`
          .project-border-animated::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 4px;
            border-radius: 1rem;
            background: linear-gradient(270deg, #f87171, #60a5fa, #34d399, #facc15, #f87171);
            background-size: 400% 400%;
            animation: gradient-border 6s ease infinite;
            z-index: 0;

            /* Creates a border effect using masking */
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
          }

          @keyframes gradient-border {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Fallback for old browsers */
          @supports not (backdrop-filter: blur(10px)) {
            .project-border-animated::before {
              background: none;
              border: 2px solid #60a5fa;
              animation: none;
            }
          }
        `}
      </style>

    </div>
  );
};

export default Projects;