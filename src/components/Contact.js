import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Contact
            </p>
            <p className=' py-6'>
                Submit the form below to get in touch with me
            </p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/f08f6608-bfff-4a90-b9c1-3f9119282423" method="POST" className='flex flex-col w-full md:w-1/2 h-screen'>
                <input type='text'
                 name='name ' 
                 className=' bg-transparent border-2 p-2 rounded-md text-white focus:outline-none' 
                  placeholder='Enter Your Name'/>

                   <input type='email'
                 name='email ' 
                 className=' my-4 bg-transparent border-2 p-2 rounded-md text-white focus:outline-none' 
                  placeholder='Enter Your E-mail'/>
                  
                  <textarea placeholder='Enter Your Message'  className=' bg-transparent p-2 border-2 rounded-md text-white focus:outline-none'  name='message' id ='' cols={30} rows={10} ></textarea>
                  <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center flex rounded-md duration-300  hover:scale-110'>Let's talk</button>

              
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
