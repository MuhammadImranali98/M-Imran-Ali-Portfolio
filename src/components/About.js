import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b   text-white from-gray-800 to-black'>
    <div className=' max-w-screen-lg p-4 mx-auto flex-col justify-center flex w-full h-full'>
        <div className='pb-4'>
        <p className=' text-4xl font-bold  inline  hover:duration-200  hover:border-b-4 border-gray-500'>
            About
        </p>
        </div>
            <p className='sm:text-lg text-base text-gray-300 sm:mt-5'>
            I am a dedicated and results-oriented frontend developer with over 2 years of hands-on experience in building responsive and user-friendly web applications. My passion for creating elegant and intuitive user interfaces drives my commitment to delivering high-quality solutions.
        
           
            </p>
            
            <br/>
            <div className='mb-4'>
            <p className=' sm:text-4xl text-2xl   font-bold  inline mb-5 hover:duration-200  hover:border-b-4 border-gray-500'>
            Technical Expertise:
        </p>
        </div>
            <p className=' sm:text-lg text-[15px] text-gray-300'>
            <p className='mb-2 hidden sm:flex'>I excel in a wide range of frontend technologies, including:</p>
            <ul>
              <li className='pb-2 hidden sm:flex'>
             <b className=' text-cyan-300'>HTML/CSS: </b>    I have a strong foundation in HTML5 and CSS3, ensuring pixel-perfect and visually appealing designs. My expertise extends to responsive web design and cross-browser compatibility.
              </li>
              <li className='pb-2'>
              <b className=' text-cyan-300'>JavaScript:</b>      Proficient in JavaScript, I leverage its power to craft interactive and dynamic web applications.  <span className='hidden sm:flex'> My problem-solving skills enable me to tackle complex challenges efficiently.</span>
              </li>
              <li className='pb-2'>
              <b className=' text-cyan-300'>Frontend Frameworks:</b>
                  I am well-versed in modern frontend frameworks, including React.js and Next.js. <span className='hidden sm:flex'>I have successfully implemented these technologies in various projects, enabling fast, efficient, and scalable web development. </span> 
              </li>
              <li className='pb-2'>
              <b className=' text-cyan-300'> UI Libraries:</b>
                  I have experience working with popular UI libraries like Bootstrap and Tailwind CSS  , streamlining the development process and enhancing the user experience.
              </li>
            </ul>
            <br/>
          
            </p>
            <br/>
            <div className='mb-4'>
            <p className='   text-2xl sm:text-4xl font-bold  inline sm:mb-5 mb-2  hover:duration-200  hover:border-b-4 border-gray-500'>
            Key Achievements:
        </p>
        </div>
            <p className=' sm:text-lg text-[15px] text-gray-300'>
            <p className='mb-2 hidden sm:flex '>During my career, I have achieved several milestones, including:</p>
            <ul>
              <li className='pb-2'>
             <b className=' text-cyan-300'>Project Delivery: </b>   I have contributed to the successful delivery of multiple web applications, <span  className=' hidden sm:flex'>meeting or exceeding client expectations for functionality and design.</span> 
              </li>
              <li className='pb-2 '>
              <b className='  text-cyan-300'>Performance Optimization:</b> I prioritize performance optimization techniques to ensure fast-loading websites <span  className=' hidden sm:flex'>,enhancing user satisfaction and search engine rankings</span>
              </li>
              <li className='pb-2'>
              <b className=' text-cyan-300'>Continuous Learning</b>
              I am dedicated to staying up-to-date with the latest frontend trends and technologies.
              </li>

            </ul>
            <br/>
          
            </p>
        
    </div>
    </div>
  )
}

export default About
