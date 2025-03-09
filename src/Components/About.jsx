import React from 'react'
import about_img from '../assets/my-img-1.jpg'

const About = () => {  
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 text-shadow-blue'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={about_img} alt="" className='w-72 rounded-4xl h-80 object-cover mb-8 md:mb-0'/>
                <div className='flex-1'>
                    <p className='text-lg mb-8'>Hi, I'm Thushanthan, a Full-Stack Developer passionate about building scalable and user-friendly applications. I specialize in front-end (React, Vue.js) and back-end (Node.js, Express, Django) development, with expertise in databases like MongoDB, PostgreSQL, and MySQL.

                    I enjoy exploring new technologies, optimizing system architecture, and solving complex problems with clean, efficient code. Whether it's developing web apps, enhancing API performance, or deploying cloud solutions, I bring a problem-solving mindset and attention to detail to every project.
                    </p>
                    <div className='space-y-4'>
                        <div className='flex items-center'>
                          <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                          <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                          <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <label htmlFor="htmlandcss" className='w-2/12'>Node JS</label>
                          <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                          </div>
                        </div>
                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                      <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>3+</h3>
                        <p className='font-bold text-shadow'>Years Experience</p>
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>50+</h3>
                        <p className='font-bold text-shadow'>Projects Completed</p>
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10+</h3>
                        <p className='font-bold text-shadow'>Happy Clients</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About