"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiCplusplus,
  SiAmazon ,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const skills = [
  { name: 'Javascript', icon: SiJavascript },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'Node js', icon: SiNodedotjs },
  { name: 'React', icon: SiReact },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Nextjs', icon: SiNextdotjs },
  { name: 'Devops', icon: FaCode },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'Docker', icon: SiDocker },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'C++', icon: SiCplusplus },
  { name: 'AWS', icon: SiAmazon  },
];

export const SkillsCarousel = () => {
  return (
    <div className="bg-black rounded-lg p-6 w-full">
      <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
      
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.05,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <div className="bg-black-800 hover:bg-gray-700 rounded-sm px-4 py-2.5 flex items-center space-x-2.5 transition-all duration-200 border border-gray-700 hover:border-gray-600">
              <skill.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-200" />
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-200">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};