import React from 'react'

const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and dynamic user interfaces with React, Vue.js, and modern UI frameworks.",
      icon: "🖥️"
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side logic using Node.js, Express, and Django with optimized APIs.",
      icon: "🛠️"
    },
    {
      title: "Database Management",
      description: "Designing and managing databases with MongoDB, PostgreSQL, and MySQL for efficient data handling.",
      icon: "🗄️"
    },
    {
      title: "Full-Stack Web Development",
      description: "Creating end-to-end web applications by integrating frontend, backend, and database technologies.",
      icon: "🌐"
    },
    {
      title: "API Development & Integration",
      description: "Designing secure and scalable RESTful and GraphQL APIs for seamless communication between services.",
      icon: "🔗"
    },
    {
      title: "Deployment & DevOps",
      description: "Deploying and managing applications on cloud platforms like AWS, Vercel, and DigitalOcean with CI/CD.",
      icon: "🚀"
    }
  ];

const Services = () => {
  return (
    <div className='bg-black text-white py-20' id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 text-shadow-blue'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6'>
                {services.map(service => (
                    <div key={service.title} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    <div className='mt-5 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>{service.title}</div>
                    <h3 className='mt-2 font-bold'>{service.description}</h3>
                    {/* <p className='mt-2 text-center'>{service.icon}</p> */}
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services