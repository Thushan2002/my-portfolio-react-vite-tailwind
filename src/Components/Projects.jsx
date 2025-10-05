import React, { useState } from "react";
import { motion } from "framer-motion";
import e_commerce from "../assets/e-commerce.png";
import social_media from "../assets/social-media.png";
import hospital from "../assets/hospital.png";
import grocery from "../assets/online-grocery.png";
import chat from "../assets/chat.png";
import weather from "../assets/weather.png";
import computer_lab from "../assets/computer-lab.png";

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: e_commerce,
    github: "https://github.com/Thushan2002/Mahi-clothingsite-react-vite.git",
  },
  {
    id: 2,
    name: "X-clone",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Tanstack Query",
    ],
    image: social_media,
    github: "https://github.com/Thushan2002/x-clone.git",
  },
  {
    id: 3,
    name: "Hospital Management System",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: hospital,
    github:
      "https://github.com/mayuraabhayasinghe/dengue-patient-management-system-grp4.git",
  },
  {
    id: 4,
    name: "Grocery Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: grocery,
    github: "https://github.com/Thushan2002/GreenGrocery.git",
  },
  {
    id: 5,
    name: "Chat Application",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    image: chat,
    github: "https://github.com/Thushan2002/chatMe--reactjs.git",
  },
  {
    id: 6,
    name: "Computer Management System",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    image: computer_lab,
    github: "https://github.com/Thushan2002/CtrlRoom.git",
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group h-80 rounded-2xl overflow-hidden">
              {/* Project image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
                animate={{
                  scale: hoveredId === project.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
              </motion.div>

              {/* Project content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.h3
                  className="text-2xl font-bold text-white mb-2"
                  animate={{
                    y: hoveredId === project.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}>
                  {project.name}
                </motion.h3>

                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  animate={{
                    y: hoveredId === project.id ? 0 : 30,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}>
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-900/80 text-gray-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  animate={{
                    y: hoveredId === project.id ? 0 : 40,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300">
                    View Project
                  </a>
                </motion.div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/50 rounded-2xl pointer-events-none transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 transition-all duration-300">
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
