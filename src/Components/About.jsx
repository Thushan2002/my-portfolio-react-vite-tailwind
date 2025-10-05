import React from "react";
import { motion } from "framer-motion";
import about_img from "../assets/my-img-1.png";

const About = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
  ];

  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "React JS", level: 90 },
    { name: "Node JS", level: 85 },
    { name: "Python", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ];

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-b from-green-400/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-t from-blue-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex justify-center items-center gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3">
            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}>
              Hi, I'm{" "}
              <span className="font-bold text-green-400">Thushanthan</span>, a
              Full-Stack Developer passionate about building scalable and
              user-friendly applications. I specialize in front-end (React,
              Vue.js) and back-end (Node.js, Express, Django) development, with
              expertise in databases like MongoDB, PostgreSQL, and MySQL.
              <br />
              <br />I enjoy exploring new technologies, optimizing system
              architecture, and solving complex problems with clean, efficient
              code.
            </motion.p>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                My Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/30 transition-all duration-300 text-center">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
