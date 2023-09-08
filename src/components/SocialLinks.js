import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
import { BsFillPersonLinesFill} from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
        id:1,
        child:(
            
<> LinkedIn <FaLinkedin size={25}/> </>
            
        ),
        href:"https://linkedin.com",
        style:'rounded-tr-md',
        download:true,

    },
    {
        id:2,
        child:(
            
<> Github <FaGithub size={25}/> </>
            
        ),
        href:"https://github.com/MuhammadImranali98/",
        style:'rounded-tr-md',
        download:true,

    },
    {
        id:1,
        child:(
            
<> E-mail <HiOutlineMail size={25}/> </>
            
        ),
        href:"https://mail.google.com/mail/u/0/?zx=sjx3vjzex27e#inbox",
        style:'rounded-tr-md',
        download:true,

    },
    {
        id:1,
        child:(
            
<> home <BsFillPersonLinesFill size={25}/> </>
            
        ),
        href:"https://linkedin.com",
        style:'rounded-tr-md',
        download:true,

    },
  ];


  return (
    <div className='flex-col hidden lg:flex  left-0 top-[35%] fixed '>
      
      <ul className=''> 
     {links.map ( ({id,child,href,style,download}) =>(
        <li key={id} className={`bg-gray-500  flex jus ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md  items-center w-40 h-14 px-4  text-white  ${style} `}> 
      <a className='flex justify-between w-full text-white'  download={download} rel="noreferrer" target='_blank' href={href}> {child}</a>
       </li>
     ))}
     
      </ul>
    </div>
  )
}

export default SocialLinks
