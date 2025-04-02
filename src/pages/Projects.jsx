import React from 'react';
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
    icon: <FaUniversity className="text-5xl text-blue-500" />, 
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
    icon: <FaCamera className="text-5xl text-green-500" />, 
  },
  {
    id: 3,
    title: 'Course Analyzer',
    description: 'A tool for schools to optimize student course enrollment by analyzing records and recommending the best courses based on student needs. It helps prevent class overbooking and improves resource allocation and time management.',
    link: 'https://github.com/Kheav-Kienghok/Course_Analyzer',
    icon: <FaCode className="text-5xl text-yellow-500" />, 
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'My personal website that showcases my skills, projects, and experience as a developer. I built this using modern web tools, creating a clean and interactive layout to highlight my work.',
    link: 'https://github.com/Kheav-Kienghok/Portfolio_Website',
    icon: <FaLaptopCode className="text-5xl text-purple-500" />, 
  },
];


const Projects = () => {
  return (
    <div className="font-[Lato-Thin] py-10">
      <div className="container mx-auto px-10 lg:px-40">

        <h2 className="font-funnel text-3xl lg:text-4xl font-extrabold text-center text-blue-600 mb-6">Projects That Define Me</h2>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-10">
          A collection of projects where I turn ideas into reality. From AI to web development, each one reflects my passion for building efficient and impactful solutions.
        </p>


        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative bg-white bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl p-6 text-center flex flex-col items-center"
            >
              <div className="absolute inset-0 w-full h-full border-4 border-transparent rounded-2xl animate-border-run"></div>
              <div className="mb-4 z-10">{project.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 z-10">{project.title}</h3>
              <p className="text-gray-600 mt-3 z-10">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/30 z-10"
              >
                <FaGithub className="text-2xl" /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes border-run {
            0% { border-color: red; }
            25% { border-color: blue; }
            50% { border-color: green; }
            75% { border-color: yellow; }
            100% { border-color: red; }
          }
          .animate-border-run {
            animation: border-run 5s infinite linear;
          }
        `}
      </style>

    </div>
  );
};

export default Projects;