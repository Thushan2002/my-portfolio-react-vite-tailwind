import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialLinks = [
    { icon: faLinkedin, url: "#" },
    { icon: faGithub, url: "#" },
    { icon: faTwitter, url: "#" },
    { icon: faInstagram, url: "#" },
    { icon: faFacebook, url: "#" },
  ];

  const footerLinks = [
    { text: "Privacy Policy", url: "#" },
    { text: "Terms of Service", url: "#" },
    { text: "Cookies", url: "#" },
  ];

  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Thushanthan
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full stack developer based in Sri Lanka.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">
              Subscribe to Newsletter
            </h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:border-green-400 focus:outline-none text-white"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-green-400 to-blue-500 text-white">
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></motion.div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Thushanthan. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                whileHover={{ y: -2 }}
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                {link.text}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-4 h-4 rounded-full bg-green-400/30 blur-sm"></motion.div>
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-32 right-1/4 w-3 h-3 rounded-full bg-blue-500/30 blur-sm"></motion.div>
    </footer>
  );
};

export default Footer;
