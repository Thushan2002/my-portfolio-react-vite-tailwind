import React from "react";
import e_commerce from "../assets/e-commerce.jpg";
import social_media from "../assets/social-media.jpg";
import task_manager from "../assets/task-manager.jpg";
import portfolio from "../assets/portfolio.png";
import chat from "../assets/chat.jpg";
import weather from "../assets/weather.png";

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    images: e_commerce,
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 2,
    name: "Social Media App",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Socket.io", "Bootstrap"],
    images: social_media,
    github: "https://github.com/yourusername/social-media-app",
  },
  {
    id: 3,
    name: "Task Management System",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    images: task_manager,
    github: "https://github.com/yourusername/task-manager",
  },
  {
    id: 4,
    name: "Portfolio Website",
    technologies: ["React", "Framer Motion", "SCSS"],
    images: portfolio,
    github: "https://github.com/yourusername/portfolio-website",
  },
  {
    id: 5,
    name: "Chat Application",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material UI"],
    images: chat,
    github: "https://github.com/yourusername/chat-app",
  },
  {
    id: 6,
    name: "Weather Dashboard",
    technologies: ["Vue.js", "OpenWeather API", "Tailwind CSS"],
    images: weather,
    github: "https://github.com/yourusername/weather-dashboard",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-shadow-blue">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={project.images}
                alt={project.name}
                className="rounded-lg my-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">
                {project.technologies.join(", ")}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full">
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
