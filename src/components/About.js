import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b   text-white from-gray-800 to-black'>
    <div className=' max-w-screen-lg p-4 mx-auto flex-col justify-center flex w-full h-full'>
        <div className='pb-8'>
        <p className=' text-4xl font-bold  inline  hover:duration-200  hover:border-b-4 border-gray-500'>
            About
        </p>
        </div>
            <p className='text-xl mt-8'>
            I'm a passionate frontend developer with expertise in React, Tailwind CSS, and Next.js.
            </p>
            <br/>
            <p className=' text-xl'>
            I love building modern, user-friendly web applications that make a positive impact   
            </p>
        
    </div>
    </div>
  )
}

export default About
