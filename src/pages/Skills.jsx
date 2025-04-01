import React from "react";
import { FaPython, FaJs, FaAws, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGit, FaGithub, FaJava } from "react-icons/fa";
import { SiFastapi, SiMysql, SiSqlite, SiMongodb, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import AWS_Achievement from "./components/AWS_Achievement";

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto py-30 px-4 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-8">Technical Skills</h2>
      <p className="text-lg text-gray-600 mb-12">Here are some of the technologies and tools I work with:</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-lg">
        {[  
          { category: "Frontend", skills: [
            { name: "HTML5", icon: <FaHtml5 size={50} className="text-red-500" />, border: "border-red-500" },
            { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-600" />, border: "border-blue-600" },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-teal-400" />, border: "border-teal-400" },
            { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-500" />, border: "border-yellow-500" }
          ]},
          { category: "Backend", skills: [
            { name: "Python", icon: <FaPython size={50} className="text-yellow-600" />, border: "border-blue-500" },
            { name: "Java", icon: <FaJava size={50} className="text-red-600" />, border: "border-red-600" },
            { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-600" />, border: "border-green-600" },
            { name: "FastAPI", icon: <SiFastapi size={50} className="text-teal-500" />, border: "border-teal-500" }
          ]},
          { category: "Databases", skills: [
            { name: "MySQL", icon: <SiMysql size={50} className="text-blue-800" />, border: "border-blue-800" },
            { name: "SQLite", icon: <SiSqlite size={50} className="text-blue-500" />, border: "border-blue-500" },
            { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" />, border: "border-green-500" }
          ]},
          { category: "Cloud & DevOps", skills: [
            { name: "AWS", icon: <FaAws size={50} className="text-orange-500" />, border: "border-orange-500" },
            { name: "Docker", icon: <FaDocker size={50} className="text-blue-500" />, border: "border-blue-500" }
          ]}
        ].map((section, index) => (
          <div key={index} className="border-2 border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.category}</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Version Control & Tools</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          {[  
            { name: "Git", icon: <FaGit size={50} className="text-red-500" /> },
            { name: "GitHub", icon: <FaGithub size={50} className="text-gray-800" /> },
            { name: "VS Code", icon: <VscVscode size={50} className="text-blue-500" /> }
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
