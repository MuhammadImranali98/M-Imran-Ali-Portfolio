import React, { useEffect } from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import profile from "../images/homeimg.png"
import {Link} from "react-scroll"
import Typed from 'typed.js';
const Home = () => {
  useEffect(() => {
  
    const options = {
      strings: ["Frontend Developer", "React Developer ", "Nextjs Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };

   
    const typed = new Typed(".text", options);

    
    return () => {
      typed.destroy();
    };
  }, []);
 
  return (
    <div>
    
      <div name="home" className='h-screen w-full bg-gradient-to-b  text-white from-black via-black  to-gray-800'>
        <div className=' max-w-screen-xl w-full mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
           
              
          
            <div className='flex w-full md:mt-1  justify-center flex-col'>
            <h1 className='text-4xl  handlemt sm:text-7xl font-bold'>I am a  <span className="text"></span> </h1>
            <p className=' text-gray-300 text-lg py-4 max-w-md'>
       I have 2 years of experience building and desgining
        software.
     Currently, I love to work on web application using
      technologies like
     HTML, CSS , JavaScript React, Tailwind, Next JS.
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
            <div className=' h-auto md:h-full rounded-sm'>
            <div className='rounded-2xl object-contain h-full'>
            <img src={profile} className=' rounded-2xl object-contain min-h-full bg-transparent mx-auto  w-full  mt-3 sm:mt-0' alt='my profile' />
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
