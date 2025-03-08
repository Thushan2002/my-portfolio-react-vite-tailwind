import React from 'react'
import hero_img from '../assets/my-img-2.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 '>
    <img src={hero_img} alt="" className='mx-auto mb-8 w-58 h-58 rounded-full object-cover  transform transition-transform duration-300 hover:scale-105' />
    <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Thushanthan</span>, Full-stack Developer
    </h1>
    <p className='mt-4 text-lg text-gray-300 md:px-32'>
        I specialize in building fast, responsive, and accessible websites
    </p>
    <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
        <button className='bg-gradient-to-r from-red-950 to-orange-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
    </div>
    </div>
  )
}

export default Hero