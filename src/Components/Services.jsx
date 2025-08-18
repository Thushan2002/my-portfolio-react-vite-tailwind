import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and dynamic user interfaces with React, Vue.js, and modern UI frameworks.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description:
      "Developing robust server-side logic using Node.js, Express, and Django with optimized APIs.",
    icon: "🛠️",
  },
  {
    title: "Database Management",
    description:
      "Designing and managing databases with MongoDB, PostgreSQL, and MySQL for efficient data handling.",
    icon: "🗄️",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Creating end-to-end web applications by integrating frontend, backend, and database technologies.",
    icon: "🌐",
  },
  {
    title: "API Development & Integration",
    description:
      "Designing secure and scalable RESTful and GraphQL APIs for seamless communication between services.",
    icon: "🔗",
  },
  {
    title: "Deployment & DevOps",
    description:
      "Deploying and managing applications on cloud platforms like AWS, Vercel, and DigitalOcean with CI/CD.",
    icon: "🚀",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-green-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

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
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your digital needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group">
              {/* Card background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>

              {/* Card content */}
              <div className="relative h-full bg-gray-900/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 group-hover:border-green-400/30 p-8 transition-all duration-500">
                <div className="text-4xl mb-6 text-green-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
