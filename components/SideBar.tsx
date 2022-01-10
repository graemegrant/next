import React from 'react'
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img src="https://picsum.photos/200/300" 
      alt="User avatar"
      className='w-32 h-32 mx-auto rounded-full' />
        <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Graeme </span>
          Grant
        </h3>
        <p className='px-2 py-1 my-3 bg-grey-200'>Web Developer</p>
        <p><GiTie className='w-6 h-6' /> Download Resume</p>
       { /* //Social icons */}
          <div>
            <a href=''>
              <AiFillGithub className='w-8 h-8' />
            </a>
            <a href=''>
              <AiFillYoutube className='w-8 h-8' />
            </a>
            <a href=''>
              <AiFillFacebook className='w-8 h-8' />
            </a>
            <a href=''>
              <AiFillLinkedin className='w-8 h-8' />
            </a>
          </div>
       { /* //Address */}
       <div>
         <div>
           <GoLocation/>
           <span>Edinburgh,UK</span>
         </div>
         <p>Graemejgrant@gmail.com</p>
         <p>0777777777777</p>
       </div>
       {/* Email Button */}
       <button>Email Me</button>
       <button>Toggle</button>
    </div>
  )
}

export default Sidebar
