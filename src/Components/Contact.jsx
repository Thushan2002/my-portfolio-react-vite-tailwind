import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xyznpbyn");

  useEffect(() => {
    if (state.succeeded) {
      setMessage("Thanks for Contacting!");
      if (formRef.current) {
        formRef.current.reset();
      }
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const contactMethods = [
    {
      icon: faEnvelope,
      text: "selvakumarthushanthan4@gmail.com",
      link: "mailto:selvakumarthushanthan4@gmail.com",
    },
    {
      icon: faPhone,
      text: "+94762508886",
      link: "tel:+94762508886",
    },
    {
      icon: faMapMarkerAlt,
      text: "Telbedde, Badulla, Sri Lanka",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "www.linkedin.com/in/selvakumar-thushanthan",
    },
    { name: "GitHub", icon: faGithub, url: "https://github.com/Thushan2002" },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://www.instagram.com/thu_shan",
    },
    {
      name: "Facebook",
      icon: faFacebook,
      url: "https://www.facebook.com/keeth.karan",
    },
  ];
  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Contact Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on your next project
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-1/3 p-4 h-full bg-gradient-to-b from-green-400/10 to-transparent rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Get In Touch
            </h3>

            <p className="text-gray-400 mb-8">
              I'm currently available for freelance projects and full-time
              opportunities. Reach out to collaborate or just say hi!
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start">
                  <div className="text-green-400 mt-1 mr-4">
                    <FontAwesomeIcon icon={method.icon} size="lg" />
                  </div>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-gray-300 hover:text-white transition-colors duration-300">
                      {method.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{method.text}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12">
              <h4 className="text-gray-400 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300">
                    {social.name.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-1/3 p-4 h-full bg-gradient-to-b from-blue-400/10 to-transparent rounded-xl">
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-400/30 text-white transition-all duration-300"
                />{" "}
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-400/30 text-white transition-all duration-300"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-400/30 text-white transition-all duration-300"></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}>
                <motion.button
                  disabled={state.submitting}
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium shadow-lg hover:shadow-green-400/30 transition-all duration-300">
                  Send Message
                </motion.button>
                <p className="mt-6 text-center text-xl text-white">{message}</p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
