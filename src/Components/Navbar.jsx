import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      } transition-all duration-300 ease-in-out shadow-lg`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with 3D hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold cursor-pointer">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Thushanthan
            </span>
            <span className="inline-block w-2 h-2 ml-1 bg-green-400 rounded-full animate-pulse"></span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Projects"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="relative group text-white/90 hover:text-green-400 hover:border-b border-b-green-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}>
                {item}
                <motion.span
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}

            {/* Contact Button with floating animation */}
            <motion.a
              className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(74, 222, 128, 0.4)",
              }}
              href={"#contact"}
              whileTap={{ scale: 0.95 }}>
              <span className="relative z-10">Contact Me</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </motion.a>
          </div>

          {/* Mobile menu button (would need state and additional components for full functionality) */}
          <button className="md:hidden text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
