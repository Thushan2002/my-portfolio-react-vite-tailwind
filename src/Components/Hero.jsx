import React from "react";
import { motion } from "framer-motion";
import hero_img from "../assets/my-img-2.jpg";
import ParticlesBackground from "./ParticlesBackground"; // background particles
import { TypeAnimation } from "react-type-animation"; // <-- install this

const Hero = () => {
  return (
    <section
      id="home"
      className="px-2 sm:px-4 md:px-6 lg:px-8 relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Thushanthan
              </span>
            </h1>

            {/* Typing animation */}
            <div className="text-2xl md:text-3xl font-medium text-gray-300 h-12 mb-6">
              <TypeAnimation
                sequence={[
                  "Frontend Developer!",
                  2000,
                  "Backend Developer!",
                  2000,
                  "Fullstack Developer!",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              />
            </div>

            {/* Subtitle */}
            <p className="mt-2 text-lg md:text-xl text-gray-300 max-w-md">
              I specialize in building fast, responsive, and accessible
              websites.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(74, 222, 128, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>

              <motion.a
                href="/resume.pdf" // <-- place resume in public/resume.pdf
                download
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Download Resume</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500 -z-10 animate-pulse"></div>

            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500 animate-spin-slow"></div>

            {/* Profile Image */}
            <img
              src={hero_img}
              alt="Profile"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
