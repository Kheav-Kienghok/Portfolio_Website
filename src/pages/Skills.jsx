import React from "react";
import { FaPython, FaJs, FaAws, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGit, FaGithub, FaJava } from "react-icons/fa";
import { SiFastapi, SiMysql, SiSqlite, SiMongodb, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import AWS_Achievement from "./components/AWS_Achievement";

const Skills = () => {
  return (
    <div className="font-[Lato-Thin] max-w-5xl mx-auto py-10 px-4 text-center">
      
      <h2 className="font-funnel text-4xl font-extrabold text-blue-600 mb-5 lg:mb-8"
        style={{
          color: '#2563EB' // Equivalent to Tailwind's text-blue-600
        }}
      >
        Technical Skills
      </h2>
      <p className="text-lg text-gray-600 lg:mb-10 m-[40px] mb-7"
        style={{
          color: '#4B5563' // Equivalent to Tailwind's text-gray-600
        }}
      >
        Here are some of the technologies and tools I work with:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:grid-cols-2 gap-8 text-lg">
        {[  
          { category: "Frontend", skills: [
            { 
              name: "HTML5", 
              icon: <FaHtml5 size={50} className="text-red-500" style={{ color: '#dc2626' }} />, 
              border: "border-red-500",
              style: { borderLeft: '4px solid #dc2626' } // Fallback for older iOS
            },
            { 
              name: "CSS3", 
              icon: <FaCss3Alt size={50} className="text-blue-600" style={{ color: '#2563eb' }} />, 
              border: "border-blue-600",
              style: { borderLeft: '4px solid #2563eb' }
            },
            { 
              name: "Tailwind CSS", 
              icon: <SiTailwindcss size={50} className="text-teal-400" style={{ color: '#2dd4bf' }} />, 
              border: "border-teal-400",
              style: { borderLeft: '4px solid #2dd4bf' }
            },
            { 
              name: "JavaScript", 
              icon: <FaJs size={50} className="text-yellow-500" style={{ color: '#facc15' }} />, 
              border: "border-yellow-500",
              style: { borderLeft: '4px solid #facc15' }
            }
          ]},
          { category: "Backend", skills: [
            { 
              name: "Python", 
              icon: <FaPython size={50} className="text-yellow-600" style={{ color: '#ca8a04' }} />, 
              border: "border-blue-500", 
              style: { borderLeft: '4px solid #3b82f6' } 
            },
            { 
              name: "Java", 
              icon: <FaJava size={50} className="text-red-600" style={{ color: '#dc2626' }} />, 
              border: "border-red-600", 
              style: { borderLeft: '4px solid #dc2626' } 
            },
            { 
              name: "Node.js", 
              icon: <FaNodeJs size={50} className="text-green-600" style={{ color: '#16a34a' }} />, 
              border: "border-green-600", 
              style: { borderLeft: '4px solid #16a34a' } 
            },
            { 
              name: "FastAPI", 
              icon: <SiFastapi size={50} className="text-teal-500" style={{ color: '#14b8a6' }} />, 
              border: "border-teal-500", 
              style: { borderLeft: '4px solid #14b8a6' } 
            }
          ]},{ category: "Databases", skills: [
            { 
              name: "MySQL", 
              icon: <SiMysql size={50} className="text-blue-800" style={{ color: '#1e40af' }} />, 
              border: "border-blue-800", 
              style: { borderLeft: '4px solid #1e40af' } 
            },
            { 
              name: "SQLite", 
              icon: <SiSqlite size={50} className="text-blue-500" style={{ color: '#3b82f6' }} />, 
              border: "border-blue-500", 
              style: { borderLeft: '4px solid #3b82f6' } 
            },
            { 
              name: "MongoDB", 
              icon: <SiMongodb size={50} className="text-green-500" style={{ color: '#22c55e' }} />, 
              border: "border-green-500", 
              style: { borderLeft: '4px solid #22c55e' } 
            }
          ]},
          { category: "Cloud & DevOps", skills: [
            { 
              name: "AWS", 
              icon: <FaAws size={50} className="text-orange-500" style={{ color: '#f97316' }} />, 
              border: "border-orange-500", 
              style: { borderLeft: '4px solid #f97316' } 
            },
            { 
              name: "Docker", 
              icon: <FaDocker size={50} className="text-blue-500" style={{ color: '#3b82f6' }} />, 
              border: "border-blue-500", 
              style: { borderLeft: '4px solid #3b82f6' } 
            }
          ]}
        ].map((section, index) => (
          <div key={index} className="border-2 border-gray-300 rounded-lg p-4"
            style={{
              borderColor: '#d1d5db', // Fallback for border-gray-300
              borderRadius: '0.5rem', // Fallback for rounded-lg
            }}
          >
            <h3 className="font-funnel underline text-xl font-semibold text-gray-800 mb-4">{section.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center group p-4 rounded-lg border-2 border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-4">
                  <div className={`icon-wrapper p-2 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:${skill.border}`}>
                    {skill.icon}
                  </div>
                  <span className="mt-2 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-2 border-gray-300 rounded-lg p-4 mt-8">
        <h3 className="font-funnel underline text-xl font-semibold text-gray-800 mb-4">Version Control & Tools</h3>
        <div className="flex justify-center gap-8 flex-wrap">
        {[
          { 
            name: "Git", 
            icon: <FaGit size={50} className="text-red-500" style={{ color: '#dc2626' }} /> 
          },
          { 
            name: "GitHub", 
            icon: <FaGithub size={50} className="text-gray-800" style={{ color: '#1f2937' }} /> 
          },
          { 
            name: "VS Code", 
            icon: <VscVscode size={50} className="text-blue-500" style={{ color: '#3b82f6' }} /> 
          }
          ].map((tool, i) => (
            <div key={i} className="flex flex-col items-center group p-2 lg:p-4 rounded-lg border-2 border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="icon-wrapper p-2 rounded-lg border-2 border-transparent transition-all duration-300">
                {tool.icon}
              </div>
              <span className="mt-2 font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Version Control & Tools Horizontal */}
      <AWS_Achievement />


    </div>
  );
};

export default Skills;
