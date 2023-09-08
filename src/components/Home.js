import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import profile from "../images/profile.jpeg"
import {Link} from "react-scroll"
const Home = () => {

 
  return (
    <div>
    
      <div name="home" className='h-screen w-full bg-gradient-to-b  text-white from-black via-black  to-gray-800'>
        <div className=' max-w-screen-lg w-full mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
           
              
          
            <div className='flex  justify-center flex-col'>
            <h1 className='text-4xl  sm:text-7xl font-bold'>I am a FrontEnd Developer</h1>
            <p className=' text-gray-500 py-4 max-w-md'>
       I have 2 years of experience building and desgining
        software.
     Currently, I love to work on web application using
      technologies like
      React, Tailwind, Next JS and GraphQL.
          </p>
          <div className='flex items-center'>
            <Link to='portfolio' smooth duration={500} className="w-fit group px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r  cursor-pointer   from-cyan-500 to-blue-500 ">
            Portfolio
            <span className=' group-hover:rotate-90 ml-1 duration-300 '>
            <MdOutlineKeyboardArrowRight  size={25} />
            </span>
            </Link>
            </div>
            </div>
            
            <div className='rounded'>
            <img src={profile} className=' rounded-2xl bg-transparent mx-auto w-2/3 md:w-full ' alt='my profile' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home