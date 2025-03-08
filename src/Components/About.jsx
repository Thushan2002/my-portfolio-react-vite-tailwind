import React from 'react'
import about_img from '../assets/my-img-1.jpg'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={about_img} alt="" className='w-72 rounded-4xl h-80 object-cover mb-8 md:mb-0'/>
                <p className='text-lg mb-8'>Hi, I'm Thushanthan, a passionate Full-Stack Developer with a knack for building scalable, user-friendly applications. With expertise in front-end and back-end technologies, I specialize in crafting seamless digital experiences that bridge the gap between functionality and aesthetics.

                From designing intuitive React and Vue.js interfaces to developing robust Node.js, Express, and Django backends, I thrive in creating full-cycle web solutions. My skills extend to working with databases like MongoDB, PostgreSQL, and MySQL, ensuring optimized data management.

                I’m always eager to explore new technologies, improve system architecture, and solve complex problems with clean, efficient code. Whether it’s developing an interactive web app, optimizing API performance, or deploying cloud-based solutions, I bring a problem-solving mindset and attention to detail to every project.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About